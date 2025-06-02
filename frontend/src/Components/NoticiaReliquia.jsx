import { useNavigate } from "react-router-dom";
import fondo from "../assets/vidaCfp/fondoe.jpg";
import foto1 from "../assets/vidaCfp/reliquia.jpg";

const NoticiaReliquia = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-cover bg-center gap-4 py-10"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="max-w-5xl   mx-auto mt-14 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 w-full ">
          LAS RELIQUIAS DEL CENTRO DE FORMACION PROFESIONAL P. BARTOLOME
          AMBROSIO, SDB
        </h1>
        <p className="italic text-lg text-center mb-6 font-semibold">
          Julio 2022 (Por: Patty Castillo)
        </p>
        <p className="mb-4 text-justify">
          En el Centro de Formación Profesional P. Bartolomé Ambrosio. SDB, se
          encuentra la Capilla Pinardi, en cuyo interior se puede venerar el
          relicario salesiano, donde puedes encontrar reliquias de primer grado,
          siendo consideradas aquellos pequeños fragmentos de cuerpo de un
          santo, las de segundo grado, que son fragmentos de ropa del santo o
          del beato, y las de tercer grado son aquellos objetos con que haya
          tenido contacto el santo o el beato; en el relicario también se puede
          observar un pequeño fragmento de camisa de Domingo Savio, un pañuelo
          del Santo Padre San Juan XXII, y otras reliquias de otros santos
          salesianos.
        </p>

        <div className="col-span-3">
          <img
            src={foto1}
            alt="Celebración 4"
            className="object-cover w-full h-auto rounded"
          />
        </div>

        <p className="mb-4 text-justify">
          Hablando varias veces Don Bosco a sus muchachos, les decía “estando
          entre ustedes me siento bien”.
        </p>
        <p className="text-justify">
          En la capilla Pinardi del CFP podremos encontrarnos con la presencia
          de Don Bosco, acá reposará un pequeño y sagrado fragmento de su
          cuerpo, reliquia que podrá ser venerada por los jóvenes, exalumnos y
          cuantos se sienten cercanos al corazón educativo del Santo de la
          juventud. La reliquia se encuentra en un pequeño estuche de plata, de
          forma redonda, protegido por un cristal, debidamente sellado, atado a
          un cordón de seda color rojo, y sellado con el sello de la
          Congregación Salesiana.
        </p>

        <p className="mb-4 text-justify">
          Esta reliquia nos dice que este hombre no fue un mito, sino que fue de
          carne y hueso como nosotros, que siguió a Jesucristo de tal manera que
          es un ejemplo, un intercesor y una bendición».
        </p>

        <p className="text-justify">
          Puedes visitar el Relicario en 39 calle “B” 6-69 zona 8, ciudad de
          lunes a viernes de 8:30 a 15:00 horas.
        </p>

        <div className="bg-[#d9edf7] p-4 rounded mb-4">
          <span className="font-bold">
            Puedes visitar el Relicario en 39 calle “B” 6-69 zona 8, ciudad de
            lunes a viernes de 8:30 a 15:00 horas.
          </span>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => navigate("/vidacfp")}
            class="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group "
          >
            <div class="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]">
              <div class="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
            </div>
            <div class="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
            <div class="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
            <div class="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
            <div class="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
            <div class="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
            <div class="relative flex items-center justify-center gap-2">
              <span class="text-lg font-normal bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
                Volver a VidaCFP
              </span>
            </div>
            <div class="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticiaReliquia;
