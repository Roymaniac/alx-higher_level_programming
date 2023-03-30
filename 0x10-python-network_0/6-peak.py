#!/usr/bin/python3
"""Finds a peak in a list of unsorted integers"""

def find_peak(list_of_integers):
    """
    Finds a peak in a list of unsorted integers using a modified binary search algorithm.

    Args:
    - list_of_integers: a list of unsorted integers

    Returns:
    - a peak value from the list
    """
    # handle edge cases
    n = len(list_of_integers)
    if n == 0:
        return None
    elif n == 1:
        return list_of_integers[0]
    elif n == 2:
        return max(list_of_integers)

    # binary search for peak
    left = 0
    right = n - 1
    while left <= right:
        mid = (left + right) // 2
        if (mid == 0 or list_of_integers[mid - 1] <= list_of_integers[mid]) and \
           (mid == n - 1 or list_of_integers[mid + 1] <= list_of_integers[mid]):
            # found a peak
            return list_of_integers[mid]
        elif mid > 0 and list_of_integers[mid - 1] > list_of_integers[mid]:
            # search left half
            right = mid - 1
        else:
            # search right half
            left = mid + 1

