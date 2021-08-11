let num = 3;
(num% 2 == 0)? console.log(`${num} es par`):
               console.log(`${num} es impar`);


(num% 2 == 0)? (console.log(`${num} es par`),
                console.log(`${num} y es multiplo de 4`)):
                (console.log(`${num} es impar`,
                console.log(`${num} es impar y no es multiplo de 4`)));



