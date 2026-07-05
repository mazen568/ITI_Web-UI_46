
#include <iostream>
#include <vector>
#include<limits>
using namespace std;

template <typename T>
class DynamicArray {
private:
	T* objects;
	int theSize; 
	int theCapacity; 
	static const int initialCapacity = 16; // default initial capacity

	void Resize(int newCapacity) {
		if (newCapacity < theSize) {
			return;
		}

		T* newArray = new T[newCapacity];

		for (int i = 0; i < theSize; ++i) {
			newArray[i] = objects[i];
		}

		theCapacity = newCapacity;

		delete[] objects;
		objects = newArray;
	}

public:
	explicit DynamicArray(int _Capacity = 0) {
		if (_Capacity < initialCapacity)
			_Capacity = initialCapacity;

		theSize = 0;
		theCapacity = _Capacity;
		objects = new T[theCapacity];
	}

	~DynamicArray() { delete[] objects; };

	// copy constructor
	DynamicArray(const DynamicArray& other) {
		theSize = other.theSize;
		theCapacity = other.theCapacity;

		objects = new T[theCapacity];
		for (int i = 0; i < theSize && i < theCapacity; ++i) {
			objects[i] = other.objects[i];
		}
	}

	DynamicArray& operator=(const DynamicArray& other) {
		if (this != &other) {
			delete[] objects;

			theSize = other.theSize;
			theCapacity = other.theCapacity;

			objects = new T[theCapacity];
			for (int i = 0; i < theSize && i < theCapacity; ++i) {
				objects[i] = other.objects[i];
			}
		}
		return *this;
	}

	T& operator[](int index) {
		if (index < 0 || index >= theSize)
			cout << "Index out of range" << endl;
		return objects[index];
	}

	 int size()  { return theSize; }
	 int capacity()  { return theCapacity; }

	void Add(T& value) {
		if (theSize == theCapacity) {
			Resize(2 * theCapacity);
		}
		objects[theSize] = value;
		theSize++;
	}

	void Trim() {
		if (theSize < theCapacity) {
			Resize(theSize);
		}
	}

	
	void Remove(T& value) {
		for (int i = 0; i < theSize; ++i) {
			if (objects[i] == value) {
				RemoveAt(i);
				return;
			}
		}
	}

	void RemoveAt(int index) {
		if (index < 0 || index >= theSize)
			cout << "Index out of range" << endl;

		for (int i = index; i < theSize - 1; ++i) {
			objects[i] = objects[i + 1];
		}

		theSize--;
	}

	
};
template<typename T>
class BinaryHeap {
    
    int currentSize;
    vector<T> array;


public:
  

    bool isEmpty() {
        return currentSize == 0;
    }

    T& FindMin()  {
        return array[1];
    }

    void Insert(const T& x) {
        if (currentSize == array.size() - 1)
            array.resize(2*array.size());

        int hole = ++currentSize;

        for(; x < array[hole / 2]; hole /= 2)//slide parent into the hole
            array[hole] = array[hole / 2];

        array[hole] = x;
    }

    T DeleteMin() {
        if (isEmpty()) 
            cout << "empty" << endl;

        T minValue = array[1];
        array[1] = array[currentSize--];
        percolateDown(1);
        return minValue; 
    }

    int LeftChild(int i) {
        return 2 * i;
    }


	T& operator[](int index) {
		if (index < 0 || index > currentSize)
			cout << "Index out of range" << endl;
		return array[index];
	}
	void ViewHeap()  {
		for (int i = 1; i <= currentSize; ++i)
			cout << array[i] << " ";
		cout << endl;
	}

   

    void percolateDown(int hole) {
        T tmp = array[hole];
        int child;

        //shifting hole down

        for (; LeftChild(hole) <= currentSize;hole=child)
        {
            child = LeftChild(hole);

            //if right child and is smaller then left, choose right

            if ((child != currentSize) && (array[child + 1] < array[child]))
                ++child;

            if (array[child] < tmp)
                array[hole] = array[child];//slide up
            else
                //found right spot
                break;
        }

        array[hole] = tmp;
    }

	explicit BinaryHeap(int capacity = 100) :array(capacity + 1)
	{
		currentSize = 0;
		array[0] = numeric_limits<T>::min();
	}









};



int main()
{
    cout << "Dynamic Array" << endl;
    DynamicArray<int> arr;

    int a = 7, b = 8, c = 9, d = 10, e = 11;
    arr.Add(a);
    arr.Add(b);
    arr.Add(c);
    arr.Add(d);
    arr.Add(e);

    cout << "Size: " << arr.size() << ", Capacity: " << arr.capacity() << endl;

    arr[0] = 6;
    cout << "Elements: ";
    for (int i = 0; i < arr.size(); i++)
        cout << arr[i] << " ";
    cout << endl;

    
    arr.Remove(c); 
    cout << "After removing 9: ";
    for (int i = 0; i < arr.size(); i++)
        cout << arr[i] << " ";
    cout << endl;

    arr.RemoveAt(1); 
    cout << "After removing at index 1: ";
    for (int i = 0; i < arr.size(); i++)
        cout << arr[i] << " ";
    cout << endl;

    arr.Trim();
    cout << "After Trim - Size: " << arr.size() << ", Capacity: " << arr.capacity() << endl;



    cout << "BinaryHeap" << endl;
    BinaryHeap<int> heap(10);

    heap.Insert(20);
    heap.Insert(5);
    heap.Insert(15);
    heap.Insert(22);
    heap.Insert(3);

    cout << "Heap elements: ";
    heap.ViewHeap();

    cout << "Minimum element: " << heap.FindMin() << endl;

    int minVal = heap.DeleteMin();
    cout << "Deleted minimum: " << minVal << endl;

    cout << "Heap after DeleteMin: ";
	heap.ViewHeap();

    return 0;
}


