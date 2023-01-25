const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];

const btnBuscar = document.querySelector("#btnBuscar");
const inputCuartos = document.querySelector("#inputCuartos");
const metrosMin = document.querySelector("#metrosMin");
const metrosMax = document.querySelector("#metrosMax");
let total = document.querySelector("#total");
const propiedades = document.querySelector(".propiedades");
const propiedadCaja = document.querySelector("#propiedadCaja");
const form = document.querySelector("#form");
const btnReset = document.querySelector("#btnReset");


btnBuscar.addEventListener("click", () => {
  if (inputCuartos.value.length == 0) {
    alert("Falta ingresar la cantidad de valores!");
  }
});
btnBuscar.addEventListener("click", () => {
  if (metrosMax.value.length == 0) {
    alert("Falta ingresar la cantidad máxima de metros!");
  }
});
btnBuscar.addEventListener("click", () => {
  if (metrosMin.value.length == 0) {
    alert("Falta ingresar la cantidad mínima de metros!");
  }
});

btnReset.addEventListener("click", () => {
  metrosMax.value = "";
  metrosMin.value = "";
  inputCuartos.value = "";
});

function render() {
  for (let propiedad of propiedadesJSON) {
    console.log(propiedad);
    let html = ""
    propiedadCaja.innerHTML += `<div class="propiedad" id="propiedadCaja">
    <div class="img"
        style="background-image: url('${propiedad.src}')">
    </div>
    <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
            <p>Cuartos:${propiedad.rooms}</p>
            <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info ">Ver más</button>
    </section>
</div>`;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(inputCuartos.value);
  console.log(metrosMin.value);
  console.log(metrosMax.value);

  for (let propiedad of propiedadesJSON) {
    
    propiedades.html = "";
    if (
      propiedad.rooms == Number(inputCuartos.value) &&
      propiedad.m >= Number(metrosMin.value) &&
      propiedad.m <= Number(metrosMax.value)
    ) {
      propiedades.innerHTML = `<div class="propiedad" id="propiedadCaja">
      <div class="img"
          style="background-image: url('${propiedad.src}')">
      </div>
      <section>
          <h5>${propiedad.name}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos:${propiedad.rooms}</p>
              <p>Metros: ${propiedad.m}</p>
          </div>
          <p class="my-3">${propiedad.description}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
  </div>`;
  total.innerHTML = `${propiedadesJSON.length}`
    }
    console.log("adios");
  }
  form.addEventListener("reset", (e) => {
    propiedades.innerHTML = ""
    total.innerHTML ="0";
  });
});

/*


form.addEventListener("submit" ,(e) => {
  e.preventDefault();
})

 form.addEventListener("reset", (e) => {
  propiedades.innerHTML = "";
  render()
 })


  //btnBuscar.addEventListener("click", () =>{})
  */
