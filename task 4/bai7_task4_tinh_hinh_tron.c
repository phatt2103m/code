#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
   float s;
   float r;
   float c;
   float pi = 3.14;
   printf("nhap ban kinh : ");
   scanf("%f", &r);
   
   s = r * r * 3.14;
   printf("dien tich hinh tron : %0.f\n", s);
   
   c = 2 * r * 3.14;
   printf("chu vi hinh tron : %0.f", c);
   
   return 0;
}
