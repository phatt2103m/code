#include<stdio.h>
#include<string.h>

int main()
{

 char string[1000];

   printf("Enter String: ");
   gets(string);

   printf("Upper Case: %s", strlwr(string));

   return  0;
}
