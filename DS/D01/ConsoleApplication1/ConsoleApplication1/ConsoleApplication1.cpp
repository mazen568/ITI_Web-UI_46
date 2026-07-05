
#include <iostream>
using namespace std;

int binsearch(int arr[], int first, int last, int num) {
    if (last <= first) {
        if (num > arr[first])
            return first + 1;
        else
            return first;
    }

    int mid = (first + last) / 2;

    if (num == arr[mid])
        return mid + 1;
    else if (num < arr[mid])
        return binsearch(arr, first, mid - 1, num);
    else
        return binsearch(arr, mid + 1, last, num);
}


void swap(int& x, int& y) {
    int temp = x;
    x = y;
    y = temp;
}

void bubbleSort(int* arr, int size) {
    for (int i = 0; i < size-1; i++)
    {
        bool isSorted = true;
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }
    }

}

void merge(int* arr,int lfirst,int llast,int rfirst,int rlast) {

    int tempArr[8];
    int index = lfirst;
    int saveFirst = lfirst;
    while ((lfirst <= llast) && (rfirst <= rlast)) {
        if (arr[lfirst] < arr[rfirst]) {
            tempArr[index] = arr[lfirst];
            lfirst++;
            index++;
        }
        else {
            tempArr[index] = arr[rfirst];
            rfirst++;
            index++;
        }
    }
    //khod ba2y el left
    while (lfirst <= llast) {
        tempArr[index] = arr[lfirst];
        lfirst++;
        index++;
    }

    //khod ba2y el right
    while (rfirst <= rlast) {
        tempArr[index] = arr[rfirst];
        rfirst++;
        index++;
    }

    //l7d rlast 3shan ento btmerge etnen arrays fa lazm tgeeb akhr el etnen arrays dol el hwa rlast
    for (int i = saveFirst; i <= rlast; i++) {
        arr[i] = tempArr[i];
    }
}

void mergeSort(int *arr,int first,int last) {
  if(first<last){
    int middle = (first + last) / 2;
    mergeSort(arr, first, middle);
    mergeSort(arr, middle + 1, last);
    merge(arr, first, middle, middle + 1, last);
  }

}


int seqSearch(int* arr, int size, int num) {
    for (int i = 0;  i < size;  i++)
    {
        if (arr[i] == num)
            return i;
        else if (arr[i] > num)
            break;
    }
    return -1;
}

int bsearch(int *arr,int first ,int last,int num) {
    if (first < last) {
        int middle = (first + last) / 2;
        if (arr[middle] == num)
            return middle;
        if (num < arr[middle])
            return bsearch(arr, first, middle - 1, num);
        else
            return bsearch(arr,  middle + 1, last, num);
    }

    return - 1;
}

int bsearch2(int* arr, int size, int num) {
    int first = 0;
    int last = size - 1;

    while (first < last) {
        int middle = (first + last) / 2;

        if (arr[middle] == num) {
            return middle; 
        }
        else if (arr[middle] > num) {
            last = middle - 1;  
        }
        else {
            first = middle + 1; 
        }
    }

    return -1; 
}
int quickPart(int* arr, int first, int last) {

    int pivot = arr[first];
    int l = first + 1;
    int r = last;

    while (true) {
        while (l<=r && arr[l] < pivot) {
            l++;
        }

        while(arr[r]>pivot){
            r--;
        }

        if (l >= r)
        {
            break;
        }
        swap(arr[r], arr[l]);
    }
    swap(arr[first], arr[r]);
    return r;
}
void quickSort(int* arr, int first, int last) {

    //1 2 3 5 6
    //1 2
    //5 6
    if (first < last) {
        int pivot = quickPart(arr, first, last);
        quickSort(arr, first, pivot - 1);
        quickSort(arr, pivot + 1, last);
    }

}

void binaryInsertionSort(int arr[], int size) {
    //3 7 1
    //binsearch htgblk location of 1 
    //7oto fe mkano el sa7 b3d ama t3ml shift
    for (int i = 1; i < size; i++) {
        int key = arr[i];
        int j = i - 1;

        int loc = binsearch(arr, 0, j, key);

        while (j >= loc) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[loc] = key;
    }
}

int main()
{

    int arr[] = { 5,8,2,3,1,7,6,4 };
    //bubbleSort(arr, 8);
    //cout << "Bubble sort" << endl;
    //for (int i = 0; i < 8; i++)
    //{
    //    cout << arr[i] << " ";
    //}
    // 

    //cout << endl;
    //mergeSort(arr, 0, 7);
    //cout << "merge sort" << endl;
    //for (int i = 0; i < 8; i++)
    //{
    //    cout << arr[i] << " ";
    //}
    //cout << endl;
    
    //int result = seqSearch(arr, 8, 5);
    //if (result != -1)
    //    cout << "found at index " << result << endl;
    //else
    //    cout << "not found" << endl;



    //cout << "bsearch recursive" << endl;
    //int result2 = bsearch(arr, 0, 7, 4);
    //if (result2 != -1)
    //    cout << "found at index " << result2 << endl;
    //else
    //    cout << "not found" << endl;



    //cout << "bsearch iterative" << endl;
    //int result3 = bsearch2(arr, 7, 4);
    //if (result3 != -1)
    //    cout << "found at index " << result3 << endl;
    //else
    //    cout << "not found" << endl;


  /*  quickSort(arr, 0, 7);
     cout << "quick sort" << endl;
    for (int i = 0; i < 8; i++)
    {
        cout << arr[i] << " ";
    }*/

    //binaryInsertionSort(arr, 8);
    //cout << "binary insertion sort" << endl;
    //for (int i = 0; i < 8; i++)
    //{
    //    cout << arr[i] << " ";
    //}



}

