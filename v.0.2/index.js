const cheerio = require('cheerio');
const Player = require('./class/Player');
const fs = require('fs');
const Abiliti = require('./class/Abiliti');
const Stats = require('./class/Stats');
const Wepon = require('./class/Wepon');
const PsychicPower = require('./class/PsychicPower');
const Psyker = require('./class/Psyker');

const players = [];
function extraerContenidoDeTabla(html) {
   const $ = cheerio.load(html);

   // Obtener el contenido de los elementos <th> en el encabezado de la tabla
   const thContenidos = $('table tbody tr h4').map(function () {
      return $(this).text().trim();
   }).get();

   // Crear un arreglo para almacenar los objetos por cada fila (<tr>) de la tabla
   const filas = [];


   // Iterar sobre cada li (<rootselection>) de la tabla
   $('.rootselection').each(function (i, e) {
      let player = new Player();
      // Crear un objeto para almacenar el contenido de los elementos <td> de esta fila
      const fila = {};
      const abilities = [];

      player.name = $(this).find('h4').text().trim();
      player._abilities = [];
      player.stats = [];
      player._weapons = [];
      player._psychicPowers = [];
      player._psykers = [];
      //console.log($(e).html())
      // Iterar sobre cada elemento <td> de esta fila y agregarlo al objeto
      $(e).find('.rootselection table').each(function (i, element) {

         // buscar habilidades
         if ($(element).find('tr th').first().text() === 'Abilities') {
            const tr = $(element).find('tr');

            tr.each(function (i, element) {
               let firt = $(element).children().first().text().trim().replace(/(\r\n|\n|\r)/gm, "");
               let sec = $(element).children().first().next().text().trim().replace(/(\r\n|\n|\r)/gm, "");
               let tre = $(element).children().first().next().next().text().trim().replace(/(\r\n|\n|\r)/gm, "");
               abilitie = new Abiliti(firt, sec, tre);
               abilities.push(abilitie);
            });

            player._abilities.push(abilities);

         }
         // buscar stats unidad
         if ($(element).find('tr th').first().text() === 'Unit') {
            const tr = $(element).find('tr');
            // console.log($(tr).children('td').html());
            tr.each(function (i, element) {
               let stats = new Stats();

               const td = $(element).find('td').each((i, el) => {
                  if (i === 0) {
                     stats.name = $(el).text();
                  }
                  if (i === 1) {
                     stats.move = $(el).text();
                  }
                  if (i === 2) {
                     stats.attack_mele = $(el).text();
                  }
                  if (i === 3) {
                     stats.attack_range = $(el).text();
                  }
                  if (i === 4) {
                     stats.fuerza = $(el).text();
                  }
                  if (i === 5) {
                     stats.resistencia = $(el).text();
                  }
                  if (i === 6) {
                     stats.vidas = $(el).text();
                  }
                  if (i === 7) {
                     stats.numero_ataques = $(el).text();
                  }
                  if (i === 8) {
                     stats.liderazgo = $(el).text();
                  }
                  if (i === 9) {
                     stats.salvacion = $(el).text();
                  }
               });
               if (stats.name) {
                  player.stats.push(stats)
               }

            });
         }
         // buscar armas

         if ($(element).find('tr th').first().text() === 'Weapon') {
            const tr = $(element).find('tr');           
            tr.each(function (i, element) {
               let wepon = new Wepon();
               const td = $(element).find('td').each((i, el) => {
                 
                  if (i === 0) {
                     wepon._weapon = $(el).text();
                  }
                  if (i === 1) {
                     wepon._rang = $(el).text();
                  }
                  if (i === 2) {
                     wepon._type = $(el).text();
                  }
                  if (i === 3) {
                     wepon._fuerza = $(el).text();
                  }
                  if (i === 4) {
                     wepon._penetracion = $(el).text();
                  }
                  if (i === 5) {
                     wepon._damage = $(el).text();
                  }
                  if (i === 6) {
                     wepon._abilities = $(el).text();
                  }
                  if (i === 7) {
                     wepon._ref = $(el).text().trim().replace(/(\r\n|\n|\r)/gm, "");
                  }
                 
               });
               if (wepon._weapon) {
                  player._weapons.push(wepon)
               }

            });
         }
                  // buscar SykerPower

         if ($(element).find('tr th').first().text() === 'Psychic Power') {
            const tr = $(element).find('tr');           
            tr.each(function (i, element) {
               let power = new PsychicPower();
               const td = $(element).find('td').each((i, el) => {
              
                  if (i === 0) {
                     power._nombre = $(el).text();
                     
                  }
                  if (i === 1) {
                     power._carga = $(el).text();
                  }
                  if (i === 2) {
                     power._range = $(el).text();
                  }
                  if (i === 3) {
                     power._detalles = $(el).text();
                  }
                  if (i === 4) {
                     power._ref = $(el).text().trim().replace(/(\r\n|\n|\r)/gm, "");
                  }
               
                 
               });
               if (power._nombre) {
                  player._psychicPowers.push(power);
               }

            });
         }

         // Psyker
         if ($(element).find('tr th').first().text() === 'Psyker') {
            const tr = $(element).find('tr');           
            tr.each(function (i, element) {
               let psyker = new Psyker();
               const td = $(element).find('td').each((i, el) => {
              
                  if (i === 0) {
                     psyker._name = $(el).text();                     
                  }
                  if (i === 1) {
                     psyker._cast = $(el).text();
                  }
                  if (i === 2) {
                     psyker._deny = $(el).text();
                  }
                  if (i === 3) {
                     psyker._conoce = $(el).text();
                  }
                  if (i === 4) {
                     psyker._other = $(el).text();
                  }
                  if (i === 5) {
                     psyker._ref = $(el).text().trim().replace(/(\r\n|\n|\r)/gm, "");
                  }
               
                 
               });
               if (psyker._name) {
                  player._psykers.push(psyker);
               }

            });
         }
      })
      
      // Agregar el objeto al arreglo de jugadores
      players.push(player);
   });
   return;
}

// Leer el archivo HTML
const archivoHtml = fs.readFileSync('./sources/morto.html');

// Extraer el contenido de la tabla del archivo HTML
const contenidoDeTabla = extraerContenidoDeTabla(archivoHtml);
players.forEach(function (e, i) {

     /* 


   
      */
     console.log(players[i]._name);
     console.log(players[i]._abilities);
     console.log(players[i]._stats);
     console.log(players[i]._weapons);
     console.log(players[i]._psychicPowers);
     console.log(players[i]._psykers);
  
   });