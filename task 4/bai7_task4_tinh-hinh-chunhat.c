#include <stdio.h>
#include <stdlib.h>

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char *argv[]) {
   double s;
   double p;
   double a;
   double b;
   
   printf("nhap chieu dai a : ");
   scanf("%lf", &a);
   
   printf("nhap chieu rong b : ");
   scanf("%lf", &b);
   
   s = a * b;
   printf("dien tich hinh chu nhat : %0.lf\n", s);
   
   p = 2*(a+b);
   printf("chu vi hinh chu nhat : %0.lf", p);
   
   return 0;
}
