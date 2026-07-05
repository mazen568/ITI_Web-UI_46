#include <iostream>
#include <vector>
#include <list>
#include <functional>
#include <algorithm>
#include <queue>
#include<stack >

using namespace std;
const int INF = 1000000;


template<class KeyType, class ValueType>
class MapEntry {
    KeyType key;
    ValueType value;

public:
    MapEntry(KeyType _key = KeyType(), ValueType _value = ValueType()) {
        key = _key;
        value = _value;
    }

    KeyType getKey() const {
        return key;
    }

    ValueType getValue() const {
        return value;
    }

    bool operator==(const MapEntry& other) const {
        return key == other.key;
    }
};


template<class KeyType, class ValueType>
class HashTable {
    vector<list<MapEntry<KeyType, ValueType>>> hashTable;
    int currentSize;

public:
    HashTable(int Size = 101) : hashTable(Size) {
        currentSize = 0;
    }

    bool Contains(const MapEntry<KeyType, ValueType>& x) const {
        int index = hashFn(x.getKey());

        for (const auto& entry : hashTable[index]) {
            if (entry.getKey() == x.getKey())
                return true;
        }
        return false;
    }

    void rehash() {
        auto oldTable = hashTable;
        int oldSize = oldTable.size();

        hashTable.clear();
        hashTable.resize(2 * oldSize);

        for (int i = 0; i < oldSize; i++) {
            for (auto& node : oldTable[i]) {
                int index = hashFn(node.getKey());
                hashTable[index].push_back(node);
            }
        }
    }


    bool Insert(const MapEntry<KeyType, ValueType>& x) {
        if (Contains(x))
            return false;

        if (float (currentSize + 1) / hashTable.size() > 0.7)
            rehash();

        int index = hashFn(x.getKey());
        hashTable[index].push_back(x);
        currentSize++;
        return true;
    }

    bool Remove(const MapEntry<KeyType, ValueType>& x) {
        int index = hashFn(x.getKey());
        auto& bucket = hashTable[index];

        for (auto itr = bucket.begin(); itr != bucket.end(); ++itr) {
            if (itr->getKey() == x.getKey()) {
                bucket.erase(itr);
                currentSize--;
                return true;
            }
        }
        return false;
    }


    void MakeEmpty() {
        for (auto& lst : hashTable)
            lst.clear();
        currentSize = 0;
    }

    ValueType LookUP(const KeyType& key) {
        int index = hashFn(key);

        for (const auto& entry : hashTable[index]) {
            if (entry.getKey() == key)
                return entry.getValue();
        }

        cout << "key not found" << endl;
        return ValueType();
    }

    int hashFn(const KeyType& key) const {
        return hash<KeyType>{}(key) % hashTable.size();
    }

};


template <class VertexType>
class Graph {
    int numVertices;
    VertexType vertices[50];
    int edges[50][50];
    bool marks[50];

public:
    Graph() {
        numVertices = 0;
        for (int i = 0; i < 50; i++)
            for (int j = 0; j < 50; j++)
                edges[i][j] = 0;
    }

    bool isEmpty() {
        return numVertices == 0;
    }

    bool isFull() {
        return numVertices == 50;
    }

    int GetIndex(const VertexType& vertex)
    {
        for (int i = 0; i < numVertices; i++)
        {
            if (vertices[i] == vertex)
                return i;
        }
        return -1;
    }


    void addVertex(VertexType& vertex) {
        vertices[numVertices] = vertex;
        for (int i = 0; i <= numVertices; i++) {
            edges[numVertices][i] = 0;
            edges[i][numVertices] = 0;
        }
        numVertices++;
    }

    void addEdge(VertexType fromVertex, VertexType toVertex, int weight) {
        int fromIndex = GetIndex(fromVertex);
        int toIndex = GetIndex(toVertex);
        edges[fromIndex][toIndex] = weight;
    }



    void  getAdjacentVertices(VertexType fromVertex, queue<VertexType>& q) {
        int fromIndex = GetIndex(fromVertex);//geeb el index el enta 3ayz tgblha el neighbours
        //b3d kda loop 3ady tshof feh connection aw la lw edge msh b zero yb2a kda da connection t2om 3mlo push queue
        for (int i = 0; i < numVertices; i++) {
            if (edges[fromIndex][i] != 0 )
            {
                q.push(vertices[i]);
            }
            
        }

    }

    void ClearMarks() {
        for (int i = 0; i < numVertices; i++)
            marks[i] = false;
    }

    void MarkVertex(VertexType vertex) {
        marks[GetIndex(vertex)] = true;
    }

    bool isMarked(VertexType vertex) {
        return marks[GetIndex(vertex)];
    }

    int GetEdgeWeight(VertexType fromVertex, VertexType toVertex)
    {
        int fromIndex = GetIndex(fromVertex);
        int toIndex = GetIndex(toVertex);

        return edges[fromIndex][toIndex];
    }

 

    void DepthFirstSearch(const VertexType& vertex) {
        ClearMarks();              
        stack<VertexType> s;
        s.push(vertex);

        while (!s.empty()) {
            VertexType v = s.top();
            s.pop();

            if (!isMarked(v)) {
                MarkVertex(v);
                cout << v << " ";  
            }

            queue<VertexType> q;
            getAdjacentVertices(v, q);   
            while (!q.empty()) {
                VertexType neighbor = q.front();
                q.pop();

                if (!isMarked(neighbor)) {
                    s.push(neighbor);
                }
            }
        }
    }



    void Dijkstra(const VertexType& startVertex) {
        int startIndex = GetIndex(startVertex);
        int d[50];
        bool visited[50];

        for (int i = 0; i < numVertices; i++) {
            d[i] = INF;
            visited[i] = false;
        }
        d[startIndex] = 0;

        for (int count = 0; count < numVertices; count++) {
            int u = -1;
            int minDist = INF;
            for (int i = 0; i < numVertices; i++) {
                if (!visited[i] && d[i] < minDist) {
                    minDist = d[i];
                    u = i;
                }
            }

            if (u == -1) break; 

            visited[u] = true;

            queue<VertexType> q;
            getAdjacentVertices(vertices[u], q);

            while (!q.empty()) {
                VertexType neighbor = q.front();
                q.pop();
                int v = GetIndex(neighbor);

                if (d[u] + edges[u][v] < d[v]) {
                    d[v] = d[u] + edges[u][v];
                }
            }
        }

        cout << "distances from " << startVertex << endl;
        for (int i = 0; i < numVertices; i++) {
            cout << startVertex << " to " << vertices[i] << " = " << d[i] << endl;
            
        }
    }






    

};


int main() {
  
    HashTable<int, string> myTable;

    MapEntry<int, string> e1(1, "Alice");
    MapEntry<int, string> e2(2, "Bob");
    MapEntry<int, string> e3(3, "Charlie");

    myTable.Insert(e1);
    myTable.Insert(e2);
    myTable.Insert(e3);

    cout << "HashTable Lookup for key 2: " << myTable.LookUP(e2.getKey()) << endl;

    myTable.Remove(e2);

    cout << "HashTable Lookup for key 2 after removal: " << myTable.LookUP(e2.getKey()) << endl;

   

    cout << "---------------------------\n";

    Graph<string> g;

    string A = "A", B = "B", C = "C", D = "D", E = "E";

    g.addVertex(A);
    g.addVertex(B);
    g.addVertex(C);
    g.addVertex(D);
    g.addVertex(E);

    g.addEdge(A, B, 5);
    g.addEdge(A, C, 2);
    g.addEdge(B, D, 1);
    g.addEdge(C, E, 7);
    g.addEdge(D, E, 3);
    g.Dijkstra(A);
    g.DepthFirstSearch(A);

 

    return 0;
};
