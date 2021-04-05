#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	int a;
	int h;
	int s;
	
	printf("nhap chieu cao : ");
	scanf("%d", &h);
	
	printf("nhap canh day : ");
	scanf("%d", &a);
	
	s = (a*h)/2;
	printf("dien tich tam giac : %d", s);
    
	return 0;
}	
