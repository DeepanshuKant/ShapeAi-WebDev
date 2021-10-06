#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
#include <time.h>
#define MAX 100
void random_shuffle(int arr[])
{
    srand(time(NULL));
    int i, j, temp;
    for (i = MAX - 1; i > 0; i--)
    {
        j = rand() % (i + 1);
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
void swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int p, int r)
{
    int pivotindex = p + rand() % (r - p + 1);
    int pivot;
    int i = p - 1;
    int j;

    pivot = arr[pivotindex];
    swap(&arr[pivotindex], &arr[r]);
    for (j = p; j < r; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            swap(&arr[i], &arr[j]);
        }
        swap(&arr[i + 1], &arr[r]);
        return i + 1;
    }
}
void quicksort(int arr[], int p, int q)
{
    int j;
    if (p < q)
    {
        j = partition(arr, p, q);
        quicksort(arr, p, j - 1);
        quicksort(arr, j + 1, q);
    }
}
int main()
{
    int i;
    int arr[MAX];
    for (i = 0; i < MAX; i++)
    {
        arr[i] = i;
    }
    random_shuffle(arr);
    quicksort(arr, 0, MAX - 1);
    for (i = 0; i < MAX; i++)
    {
        printf("%d \n", arr[i]);
    }
    return 0;
}
