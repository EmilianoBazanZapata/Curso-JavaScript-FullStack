let nombres = ["paco" , "jose" , "paula" , "maria"];

for(let i = 0; i <nombres.length;i++)
{
    if(nombres[i]=="paula")
    {
        break;//rompre el bucle
    }
}
for(let i = 0; i <nombres.length;i++)
{
    if(nombres[i]=="paula")
    {
        continue;//salta la posicion deseada
    }
}


for(let nombre of nombres)
{
    console.log(nombre);
}

for(let nombre of nombres)
{
    console.log(nombre.indexOf(nombre));
}

for(let index in nombres)
{
    console.log(index);
}
for(let index in nombres)
{
    console.log(nombres[index]);
}