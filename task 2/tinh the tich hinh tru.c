#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
	float v;
	float h;
	float r;
	
	printf("nhap chieu cao : ");
	scanf("%f", &h);
	
	printf("nhap canh day : ");
	scanf("%f", &r);
	
	v = 3.14*r*r*h;
	printf("the tich hinh tru : %0.2f", 3.14*r*r*h);
	return 0;
}	
