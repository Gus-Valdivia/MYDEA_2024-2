/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


let FORM_CNF = document.getElementById("Datos_Negocio");
let Btn_S = document.getElementById("Btn_SubN");
let Btn_S2 = document.getElementById("btn_AProd");

const imgp = document.getElementById('Prod_cnf');
let FORM_CNF2 = document.getElementById("Productoform");
let IMGP = document.getElementById('imgp');

Btn_S2.addEventListener('click', async (e) => {
    if(imgp.files.length!==0){
    // console.log(e);
    const file = imgp.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        }
    );

    IMGP.value = res.data.secure_url;
    }
});

Btn_S2.addEventListener("click", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "¿Está seguro de subir su negocio?",
    text: "Una vez confirme su negocio será publicado con los datos proporcionados (Puede editar los datos del Negocio despues).",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgba(244, 55, 112, 0.8)",
    cancelButtonColor: "#971A40",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
        
        
         FORM_CNF2.submit();
      
    }
  });
});

const logo = document.getElementById('logo_cnf');
const img1 = document.getElementById('inp_img1_cnf');
const img2 = document.getElementById('inp_img2_cnf');
const img3 = document.getElementById('inp_img3_cnf');

let LOGO = document.getElementById('logo');
let IMG1 = document.getElementById('img1');
let IMG2 = document.getElementById('media');
let IMG3 = document.getElementById('asset');

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/digt8oaow/image/upload`;
const CLOUDINARY_UPLOAD_PRESET = 'oxfoqolm';

Btn_S.addEventListener('click', async (e) => {
    if(logo.files.length!==0){
    // console.log(e);
    const file = logo.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        }
    );

    LOGO.value = res.data.secure_url;
    }
});

Btn_S.addEventListener('click', async (e) => {
    if(img1.files.length!==0){
    // console.log(e);
    const file = img1.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            
        }
    );

    IMG1.value = res.data.secure_url;
    }
});

Btn_S.addEventListener('click', async (e) => {
    if(img2.files.length!==0){
    // console.log(e);
    const file = img2.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }

        }
    );

    IMG2.value = res.data.secure_url;
    }
});

Btn_S.addEventListener('click', async (e) => {
    if(img3.files.length!==0){
    // console.log(e);
    const file = img3.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
           
        }
    );

    IMG3.value = res.data.secure_url;
    }
});

Btn_S.addEventListener("click", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "¿Está seguro de subir su negocio?",
    text: "Una vez confirme su negocio será publicado con los datos proporcionados (Puede editar los datos del Negocio despues).",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgba(244, 55, 112, 0.8)",
    cancelButtonColor: "#971A40",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
        
        
         FORM_CNF.submit();
      
    }
  });
});




let Plus_Logo = document.getElementById("Plus_L");
let Input_L = document.getElementById("logo_cnf");
let Most_Img = document.getElementById("Prev_Log");

let Plus_Prod = document.getElementById("Plus_Prod");
let Input_ProdL = document.getElementById("Prod_cnf");
let Most_Img_Prod = document.getElementById("Prev_img_Prod");

let img_1_cnf = document.getElementById("Plus_i1");
let img_2_cnf = document.getElementById("Plus_i2");
let img_3_cnf = document.getElementById("Plus_i3");
let imginp1_cnf = document.getElementById("inp_img1_cnf");
let imginp2_cnf = document.getElementById("inp_img2_cnf");
let imginp3_cnf = document.getElementById("inp_img3_cnf");
let imgc1_cnf = document.getElementById("imagen1_neg");
let imgc2_cnf = document.getElementById("imagen2_neg");
let imgc3_cnf = document.getElementById("imagen3_neg");

let HorA_Lun = document.getElementById("Abierto_L");
let HorC_Lun = document.getElementById("Cerrado_L");

let HorA_Mar = document.getElementById("Abierto_M");
let HorC_Mar = document.getElementById("Cerrado_M");

let HorA_Mie = document.getElementById("Abierto_Mi");
let HorC_Mie = document.getElementById("Cerrado_Mi");

let HorA_Jue = document.getElementById("Abierto_J");
let HorC_Jue = document.getElementById("Cerrado_J");

let HorA_Vie = document.getElementById("Abierto_V");
let HorC_Vie = document.getElementById("Cerrado_V");

let HorA_Sab = document.getElementById("Abierto_S");
let HorC_Sab = document.getElementById("Cerrado_S");

let HorA_Dom = document.getElementById("Abierto_D");
let HorC_Dom = document.getElementById("Cerrado_D");

let Cerr_Lun = document.getElementById("cerr_lun");
let She_Lun = document.getElementById("she_lun");

let Cerr_Mar = document.getElementById("cerr_mar");
let She_Mar = document.getElementById("she_mar");

let Cerr_Mie = document.getElementById("cerr_mie");
let She_Mie = document.getElementById("she_mie");

let Cerr_Jue = document.getElementById("cerr_jue");
let She_Jue = document.getElementById("she_jue");

let Cerr_Vie = document.getElementById("cerr_vie");
let She_Vie = document.getElementById("she_vie");

let Cerr_Sab = document.getElementById("cerr_sab");
let She_Sab = document.getElementById("she_sab");

let Cerr_Dom = document.getElementById("cerr_dom");
let She_Dom = document.getElementById("she_dom");

let Form_Sub_Neg = document.getElementById("Datos_Negocio");
let Form_AnP = document.getElementById("Productos_cnf");
let Btn_AProduct = document.getElementById("Btn_AnadirP");
let Btn_DNProduct = document.getElementById("Btn_DtNg");
let Txt_tittle_cnf = document.getElementById("dt_txt_cnf");



Form_AnP.style.display = "none";

document.addEventListener('DOMContentLoaded', function () {
  var radiosDias = document.querySelectorAll('.form-check-input');

  // Agregar un manejador de eventos de clic a cada radio con la clase 'radio-dias'
  radiosDias.forEach(function (radio) {
    radio.addEventListener('click', function () {
      mostrarDiv(this.id);
      console.log(this.id);
    });
  });
});

function mostrarDiv(diaSeleccionado) {
  // Ocultar todos los divs
  console.log(diaSeleccionado)
  var divs = document.getElementsByClassName('inpb_cnf');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }

  // Mostrar el div correspondiente al día seleccionado
  var divMostrar = document.getElementById('h' + diaSeleccionado + '_cnf');
  console.log(divMostrar);
  if (divMostrar) {
    divMostrar.style.display = 'flex';
  }
}



img_1_cnf.addEventListener("click", function () {
  imginp1_cnf.click();
});

function showPreviewImage1(event) {
  imgc1_cnf.style.display = "flex";
  img_1_cnf.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imgc1_cnf.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

imginp1_cnf.addEventListener("change", showPreviewImage1);

img_2_cnf.addEventListener("click", function () {
  imginp2_cnf.click();
});

function showPreviewImage2(event) {
  imgc2_cnf.style.display = "flex";
  img_2_cnf.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imgc2_cnf.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

imginp2_cnf.addEventListener("change", showPreviewImage2);

img_3_cnf.addEventListener("click", function () {
  imginp3_cnf.click();
});

function showPreviewImage3(event) {
  imgc3_cnf.style.display = "flex";
  img_3_cnf.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    imgc3_cnf.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

imginp3_cnf.addEventListener("change", showPreviewImage3);



Plus_Logo.addEventListener("click", function () {
  Input_L.click();
});

function showPreviewImage(event) {
  Most_Img.style.display = "flex";
  Plus_Logo.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    Most_Img.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

Input_L.addEventListener("change", showPreviewImage);


Plus_Prod.addEventListener("click", function () {
  Input_ProdL.click();
});

function showPreviewImage_Prod(event) {
  Most_Img_Prod.style.display = "flex";
  Plus_Prod.style.position = "absolute";
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    Most_Img_Prod.src = event.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

Input_ProdL.addEventListener("change", showPreviewImage_Prod);




Cerr_Lun.addEventListener("change", () => {
  if (Cerr_Lun.checked) {
    HorA_Lun.disabled = true;
    HorC_Lun.disabled = true;
    HorA_Lun.value = "";
    HorC_Lun.value = "";
    She_Lun.disabled = true;
  }
  if (!Cerr_Lun.checked) {
    HorA_Lun.disabled = false;
    HorC_Lun.disabled = false;
    She_Lun.disabled = false;
  }
});

Cerr_Mar.addEventListener("change", () => {
  if (Cerr_Mar.checked) {
    HorA_Mar.disabled = true;
    HorC_Mar.disabled = true;
    HorA_Mar.value = "";
    HorC_Mar.value = "";
    She_Mar.disabled = true;
  }
  if (!Cerr_Mar.checked) {
    HorA_Mar.disabled = false;
    HorC_Mar.disabled = false;
    She_Mar.disabled = false;
  }
});

Cerr_Mie.addEventListener("change", () => {
  if (Cerr_Mie.checked) {
    HorA_Mie.disabled = true;
    HorC_Mie.disabled = true;
    HorA_Mar.value = "";
    HorC_Mar.value = "";
    She_Mie.disabled = true;
  }
  if (!Cerr_Mie.checked) {
    HorA_Mie.disabled = false;
    HorC_Mie.disabled = false;
    She_Mie.disabled = false;
  }
});

Cerr_Jue.addEventListener("change", () => {
  if (Cerr_Jue.checked) {
    HorA_Jue.disabled = true;
    HorC_Jue.disabled = true;
    HorA_Jue.value = "";
    HorC_Jue.value = "";
    She_Jue.disabled = true;
  }
  if (!Cerr_Jue.checked) {
    HorA_Jue.disabled = false;
    HorC_Jue.disabled = false;
    She_Jue.disabled = false;
  }
});

Cerr_Vie.addEventListener("change", () => {
  if (Cerr_Vie.checked) {
    HorA_Vie.disabled = true;
    HorC_Vie.disabled = true;
    HorA_Vie.value = "";
    HorC_Vie.value = "";
    She_Vie.disabled = true;
  }
  if (!Cerr_Vie.checked) {
    HorA_Vie.disabled = false;
    HorC_Vie.disabled = false;
    She_Vie.disabled = false;
  }
});

Cerr_Sab.addEventListener("change", () => {
  if (Cerr_Sab.checked) {
    HorA_Sab.disabled = true;
    HorC_Sab.disabled = true;
    HorA_Sab.value = "";
    HorC_Sab.value = "";
    She_Sab.disabled = true;
  }
  if (!Cerr_Sab.checked) {
    HorA_Sab.disabled = false;
    HorC_Sab.disabled = false;
    She_Sab.disabled = false;
  }
});

Cerr_Dom.addEventListener("change", () => {
  if (Cerr_Dom.checked) {
    HorA_Dom.disabled = true;
    HorC_Dom.disabled = true;
    HorA_Dom.value = "";
    HorC_Dom.value = "";
    She_Dom.disabled = true;
  }
  if (!Cerr_Dom.checked) {
    HorA_Dom.disabled = false;
    HorC_Dom.disabled = false;
    She_Dom.disabled = false;
  }
});

She_Lun.addEventListener("change", () => {
  if (She_Lun.checked) {
    HorA_Lun.disabled = true;
    HorC_Lun.disabled = true;
    HorA_Lun.value = "";
    HorC_Lun.value = "";
    Cerr_Lun.disabled = true;
  }
  if (!She_Lun.checked) {
    HorA_Lun.disabled = false;
    HorC_Lun.disabled = false;
    Cerr_Lun.disabled = false;
  }
});

She_Mar.addEventListener("change", () => {
  if (She_Mar.checked) {
    HorA_Mar.disabled = true;
    HorC_Mar.disabled = true;
    HorA_Mar.value = "";
    HorC_Mar.value = "";
    Cerr_Mar.disabled = true;
  }
  if (!She_Mar.checked) {
    HorA_Mar.disabled = false;
    HorC_Mar.disabled = false;
    Cerr_Mar.disabled = false;
  }
});

She_Mie.addEventListener("change", () => {
  if (She_Mie.checked) {
    HorA_Mie.disabled = true;
    HorC_Mie.disabled = true;
    HorA_Mar.value = "";
    HorC_Mar.value = "";
    Cerr_Mie.disabled = true;
  }
  if (!She_Mie.checked) {
    HorA_Mie.disabled = false;
    HorC_Mie.disabled = false;
    Cerr_Mie.disabled = false;
  }
});

She_Jue.addEventListener("change", () => {
  if (She_Jue.checked) {
    HorA_Jue.disabled = true;
    HorC_Jue.disabled = true;
    HorA_Jue.value = "";
    HorC_Jue.value = "";
    Cerr_Jue.disabled = true;
  }
  if (!She_Jue.checked) {
    HorA_Jue.disabled = false;
    HorC_Jue.disabled = false;
    Cerr_Jue.disabled = false;
  }
});

She_Vie.addEventListener("change", () => {
  if (She_Vie.checked) {
    HorA_Vie.disabled = true;
    HorC_Vie.disabled = true;
    HorA_Vie.value = "";
    HorC_Vie.value = "";
    Cerr_Vie.disabled = true;
  }
  if (!She_Vie.checked) {
    HorA_Vie.disabled = false;
    HorC_Vie.disabled = false;
    Cerr_Vie.disabled = false;
  }
});

She_Sab.addEventListener("change", () => {
  if (She_Sab.checked) {
    HorA_Sab.disabled = true;
    HorC_Sab.disabled = true;
    HorA_Sab.value = "";
    HorC_Sab.value = "";
    Cerr_Sab.disabled = true;
  }
  if (!She_Sab.checked) {
    HorA_Sab.disabled = false;
    HorC_Sab.disabled = false;
    Cerr_Sab.disabled = false;
  }
});

She_Dom.addEventListener("change", () => {
  if (She_Dom.checked) {
    HorA_Dom.disabled = true;
    HorC_Dom.disabled = true;
    HorA_Dom.value = "";
    HorC_Dom.value = "";
    Cerr_Dom.disabled = true;
  }
  if (!She_Dom.checked) {
    HorA_Dom.disabled = false;
    HorC_Dom.disabled = false;
    Cerr_Dom.disabled = false;
  }
});

//Botón Datos del Negocio
Btn_DNProduct.addEventListener("click", () => {
  Form_AnP.style.display = "none";
  Form_Sub_Neg.style.display = "flex";
  Btn_DNProduct.classList.add("bg-dark");
  Btn_DNProduct.style.color = "#FFF";
  Btn_DNProduct.style.fontWeight = "bolder";
  Btn_AProduct.classList.remove("bg-dark");
  Btn_AProduct.classList.remove("text-white");
  Btn_AProduct.style.fontWeight = "400";
  Btn_AProduct.classList.add("btn_nav_cnf_btn2");
  Btn_AProduct.style.color = "#000";
  Txt_tittle_cnf.innerText = "Datos del Negocio";
});

//Botón Añadir Productos
Btn_AProduct.addEventListener("click", () => {
  Form_AnP.style.display = "flex";
  Form_Sub_Neg.style.display = "none";
  Btn_AProduct.classList.add("bg-dark");
  Btn_AProduct.style.color = "#FFF";
  Btn_AProduct.style.fontWeight = "bolder";
  Btn_DNProduct.classList.remove("bg-dark");
  Btn_DNProduct.classList.remove("text-white");
  Btn_DNProduct.style.fontWeight = "400";
  Btn_DNProduct.classList.add("btn_nav_cnf_btn2");
  Btn_DNProduct.style.color = "#000";
  Txt_tittle_cnf.innerText = "Crear y Añadir Productos o Servicios";
});

let Btn_AProd = document.getElementById("btn_AProd");
let Nom_Prod_inp = document.getElementById("Nom_Pro_inp");
let Pre_Prod_inp = document.getElementById("Pre_Prod_inp");
let Desc_Pro_inp = document.getElementById("Desc_Pro_inp");
let Tip_Pro_inp = document.getElementById("Tip_Pro_inp");