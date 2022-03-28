const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./ko.png")  
            Nombre("Inexistente");     
            id("xx");  
           
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let Name=data.name;
            Nombre(Name);
            let identificador=data.id
            id(identificador);
            let tipo=data.types;
            Poketipo(tipo);
            let estadisticas=data.stats;
            estadisticajuego(estadisticas);
            var Movimiento=data.moves;
            Ataques(Movimiento);
        }
    });

}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const Nombre = (Name) => {
    const num =document.getElementById("name");
    num.textContent=Name;    
}
const id = (identificador) => {
    const ide =document.getElementById("numero");
    ide.textContent=identificador;    
}
const Poketipo = (tipo) => {
             for(let i=0;i<1;i++)
              {
               
               let Tipo=tipo[i].type.name;
               console.log(Tipo);
               const T=document.getElementById("tip");
               T.textContent=Tipo;
              
            
              for(let j=0;j<tipo.length;j++)
              {
                let Tipo=tipo[j].type.name;
                console.log(Tipo);
                const Ta=document.getElementById("tipo");
                Ta.textContent=Tipo
               }
               
               } }

const estadisticajuego = (estadisticas) => {
    document.getElementById("tabla").innerHTML ="";
    for(let a=0;a<estadisticas.length;a++)
            {
               let stat=estadisticas[a].stat.name;
                document.getElementById("tabla").innerHTML += `<tr><td class="th1" >  ${stat} </td> <td class="th1" > ${estadisticas[a].base_stat} </td></tr>`;
            }

 }
const Ataques = (Movimiento) => {
    document.getElementById("valor").innerHTML ="";
    for(let m=0;m<=Movimiento.length;m++)
    {        
      mov=Movimiento[m].move.name;
      document.getElementById("valor").innerHTML +=`<ul><li id="valor" class="Li1">` + mov; `</li></ul>`; 
    }

} 
