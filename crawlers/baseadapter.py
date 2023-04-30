"""
The BaseAdapter class is an abstract base class for all adapter classes.
It defines the common interface for all adapters.
"""

from abc import ABC, abstractmethod


class BaseAdapter(ABC):
    """
    The BaseAdapter class is an abstract base class for all adapter classes.
    It defines the common interface for all adapters.
    """

    def __init__(self, save_dir, domain_whitelist=None):
        self.save_dir = save_dir
        self.domain_whitelist = domain_whitelist

    @abstractmethod
    def preprocess_image_download(self, image_url, save_dir):
        """
        Preprocess the image download by performing checks and preparing the save path.

        Args:
            image_url (str): The URL of the image to download.

        Returns:
            str: The path to the saved image file, or None if the download should be skipped.
        """
        pass

    @abstractmethod
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
        pass

    @abstractmethod
    def extract(self, start_url):
        """
        Extract image links from the website and download the images.

        Args:
            start_url (str): The starting URL for the web crawling process.

        Returns:
            list: A list of image links extracted from the website.
        """
        pass
