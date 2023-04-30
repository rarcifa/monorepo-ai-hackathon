"""
The AdapterFactory class provides a factory method to create instances of different adapters.
"""

from architecturaldesignsadapter import ArchitecturalDesignsAdapter
from exampleadapter import ExampleAdapter


class AdapterFactory:
    """
    The AdapterFactory class provides a factory method to create instances of different adapters.
    """
    @staticmethod
    def create_adapter(adapter_type, save_dir, domain_whitelist=None):
        """
        Create an instance of the specified adapter type.

        Args:
            adapter_type (str): The type of adapter to create.
            save_dir (str): The directory where the images should be saved.
            domain_whitelist (set): The set of domains to whitelist.

        Returns:
            object: An instance of the specified adapter type.
        """
        if adapter_type == 'architecturaldesigns':
            return ArchitecturalDesignsAdapter(save_dir=save_dir, domain_whitelist=domain_whitelist)
        elif adapter_type == 'example':
            return ExampleAdapter(save_dir=save_dir, domain_whitelist=domain_whitelist)
        else:
            raise ValueError(f"Unknown adapter type: {adapter_type}")
