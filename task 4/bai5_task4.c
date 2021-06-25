#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	int s;
	int height;
	int top;
	int bottom;
	
	printf("nhap chieu cao height : ");
	scanf("%d", &height);
	
	printf("nhap day nho top : ");
	scanf("%d", &top);
	
	printf("nhap day lon bottom : ");
	scanf("%d", &bottom);
	
	s = height*(top+bottom/2);
	printf("dien tich hinh thang = %d", s);
	return 0;
}
