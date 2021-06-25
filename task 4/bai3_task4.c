#include <stdio.h>
#include <conio.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

main(int argc, char *argv[]) {
	float num1, num2;
	float tong, hieu, tich, thuong;
	printf("nhap so num1 :");
	scanf("%f", &num1);
	printf("nhap so num2 : ");
	scanf("%f", &num2);
	
	tong = num1 + num2;
	printf("tong = %0.f\n", tong);
	
	hieu = num1 - num2;
	printf("hieu = %0.f\n", hieu);
	
	tich = num1 * num2;
	printf("tich = %0.f\n", tich);
	
	thuong = num1 / num2;
	printf("thuong = %f", thuong);
	getch();
}
