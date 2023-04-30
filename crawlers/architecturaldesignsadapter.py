"""
The ArchitecturalDesignsAdapter class encapsulates the logic for downloading
images and extracting image links from the Architectural Designs website.
https://www.architecturaldesigns.com/
"""

# pylint:disable=W1203


from collections import deque

import logging
import os
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

from baseadapter import BaseAdapter

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


class ArchitecturalDesignsAdapter(BaseAdapter):
    """
    The ArchitecturalDesignsAdapter class encapsulates the logic for downloading
    images and extracting image links from the Architectural Designs website.
    """

    def preprocess_image_download(self, image_url, save_dir):
        """
        Preprocess the image download by performing checks and preparing the save path.

        Args:
            image_url (str): The URL of the image to download.
            save_dir (str): The directory where the image should be saved.

        Returns:
            str: The path to the saved image file, or None if the download should be skipped.
        """
        # Extract the image file extension from the URL
        image_filename = os.path.basename(urlparse(image_url).path)
        file_extension = os.path.splitext(image_filename)[1]

        # Check if the file extension is ".gif"
        # Interior images are jpg
        # Exterior images are jpg
        # Floor plans are gif
        if not file_extension.lower() == ".gif":
            logger.info("Skipping GIF image: %s", image_url)
            return None

        # Check if the image has already been downloaded
        save_path = os.path.join(save_dir, image_filename)
        if os.path.exists(save_path):
            logger.info("Image already downloaded: %s", image_url)
            return None

        return save_path

    def postprocess_image_download(self, image_url, save_path, response):
        """
        Postprocess the image download by saving the image content to a file.

        Args:
            image_url (str): The URL of the image to download.
            save_path (str): The path to the saved image file.
            response (Response): The response object containing the image content.

        Returns:
            str: The path to the saved image file.
        """

        # TO DO: run a classifier algorithm on the image and classify,
        # 1. Interior images
        # 2. Exterior images
        # 3. Floor plan images
        # Save them into corresponding directories for model training.

        # Write the image content to a file
        with open(save_path, 'wb') as image_file:
            image_file.write(response.content)
        return save_path

    def download_image(self, image_url, save_dir):
        """
        Download an image from the specified URL and save it to the specified directory.

        Args:
            image_url (str): The URL of the image to download.
            save_dir (str): The directory where the image should be saved.

        Returns:
            str: The path to the saved image file, or None if the download failed.
        """
        try:
            save_path = self.preprocess_image_download(image_url, save_dir)
            if save_path is None:
                return None

            logger.info("Downloading floor plan: %s", image_url)
            # Add a timeout of 10 seconds
            response = requests.get(image_url, timeout=10)
            response.raise_for_status()

            save_path = self.postprocess_image_download(
                image_url, save_path, response)
            return save_path
        except requests.exceptions.RequestException as ex:
            logger.error("Error downloading image: %s - %s", image_url, ex)
            return None

    def extract(self, start_url, domain_whitelist=None, save_dir='.'):
        """
        Extract image links from the specified website and download the images.

        Args:
            start_url (str): The URL of the website to crawl.
            domain_whitelist (set): A set of domains to whitelist for crawling.
            save_dir (str): The directory where images should be saved.

        Returns:
            list: A list of extracted image links.
        """
        visited = set()
        queue = deque([start_url])
        while queue:
            url = queue.popleft()
            if url in visited:
                continue
            logger.info(f"Processing Url: {url}")
            domain = urlparse(url).netloc
            if domain_whitelist and domain not in domain_whitelist:
                continue
            visited.add(url)
            try:
                response = requests.get(url, timeout=10)
                html_content = response.text
            except requests.exceptions.RequestException as ex:
                logger.error(f"Error fetching URL: {url} - {ex}")
                continue
            soup = BeautifulSoup(html_content, 'html.parser')
            a_elements = soup.find_all('div', attrs={'data-large-src': True})
            data_img_links = [a['data-large-src'] for a in a_elements]

            for image_url in data_img_links:
                self.download_image(image_url, save_dir)
            a_elements = soup.find_all('a', href=True)
            for a in a_elements:
                link = a['href']
                full_url = urljoin(url, link)
                full_url = full_url.split("#")[0]
                if not full_url.startswith("https"):
                    continue
                full_url_domain = urlparse(full_url).netloc
                if domain_whitelist and full_url_domain not in domain_whitelist:
                    continue
                queue.append(full_url)
        return data_img_links
