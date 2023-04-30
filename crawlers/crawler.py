"""
Web Crawler for Extracting and Downloading Images from architectural design providers.
"""

# pylint:disable=W1203

import argparse
import configparser
import os

from adapterfactory import AdapterFactory


def main():
    """
    Main function that parses command-line arguments and runs the web crawler.
    """

    # Create an ArgumentParser object
    parser = argparse.ArgumentParser(
        description='Web Crawler for Extracting and Downloading Images')
    parser.add_argument('provider', type=str,
                        help='Name of the design provider to use')
    args = parser.parse_args()
    # Get the adapter name from the command-line argument
    adapter_name = args.adapter  # 'architecturaldesigns'

    # Create a ConfigParser object
    config = configparser.ConfigParser()

    # Read the configuration from the .conf file
    config.read(f'{adapter_name}.conf')

    # Extract the necessary parameters from the configuration
    url = config.get('DEFAULT', 'url')
    domain_whitelist = set(config.get('DEFAULT', 'whitelist').split())
    save_dir = config.get('DEFAULT', 'save_dir')

    os.makedirs(save_dir, exist_ok=True)

    # Use the factory method to create an instance of ArchitecturalDesignsAdapter
    adapter = AdapterFactory.create_adapter(
        adapter_name, save_dir, domain_whitelist)
    data_img_links = adapter.extract(url)
    # Print the extracted data-img links
    for link in data_img_links:
        print(link)

    # Use the factory method to create an instance of ExampleAdapter
    example_adapter = AdapterFactory.create_adapter(
        'example', save_dir, domain_whitelist)
    example_adapter.extract(url)


if __name__ == "__main__":
    main()
