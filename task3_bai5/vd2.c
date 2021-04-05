#include <stdio.h>
#include <stdlib.h>

 /*run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	int a = 50;
	int b = 24;
	int c = 68;
	int d = a*b+c/2;
	printf("gia tri a*b+c/2 la : %d\n", d);
	d = a%b;
	printf("gia tri cua a mod la : %d\n", d);
	d = a*b-c;
	printf("gia tri cua a*b-c la : %d\n", d);
	d = a/b+c;
	printf("gia tri cua a/b+c la : %d\n", d);
	d = a+b*c;
	printf("gia tri cua a+b*c la : %d\n", d);
	d = (a+b)*c;
	printf("gia tri cua (a+b)*c la : %d\n", d);
	d = a*(b+c+(a-c)*b);
	printf("gia tri cua a*(a+b)+(a-c)*b la : %d\n", d);
	return 0;
}
