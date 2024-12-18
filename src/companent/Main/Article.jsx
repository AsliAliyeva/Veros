import React from 'react'
import article from '../../img/article.webp'

function Article() {
  return (
    <div className='my-10'>
        <div className='w-[90%] mx-auto'>
            <img className='w-full' src={article} alt="ocean" />
            <h2 className='mini:text-[25px] tablet:text-[50px] laptop:text-[70px] px-6 text-[#748371]' style={{ fontFamily: "'Frunchy', sans-serif" }} >Uniendo fuerzas por mares más limpios: Veramar y 4ocean</h2>
            <div className='text-[#7a7a7a] mini:text-[15px] tablet:text-[18px]'>
                <p className='my-4'>En Veramar, creemos que la moda puede ser una fuerza para el bien. No solo nos apasiona crear trajes de baño que te hagan sentir increíble, sino que también nos comprometemos a proteger la belleza natural que nos inspira: nuestros océanos. Es por eso que la sostenibilidad está en el corazón de todo lo que hacemos, desde la elección de materiales reciclados hasta la creación de nuestro movimiento “Veramar por el Mar”, que une a voluntarios para limpiar las playas de El Paredón.</p>
                <p className='my-4'>Pero sabemos que no podemos hacerlo solos. La lucha contra la contaminación plástica requiere un esfuerzo conjunto, y es por eso que nos llena de orgullo unir fuerzas con 4ocean, una organización global que comparte nuestra pasión por la conservación de los océanos.</p>
                <p className='my-4'>4ocean, fundada en 2017 por Alex Schulze y Andrew Cooper, nació de una experiencia impactante: un viaje de surf a Bali donde, en lugar de olas perfectas, encontraron un océano inundado de plástico. Desde entonces, su misión ha sido clara: limpiar los océanos y las costas del mundo, un kilo de basura a la vez.</p>
                <p className='font-bold'>Veramar y 4ocean: una alianza por la sostenibilidad</p>
                <p className='my-4'>La colaboración entre Veramar y 4ocean es una unión natural de dos organizaciones que comparten valores fundamentales: la protección de los océanos, la reducción de residuos plásticos y la promoción de la economía circular. Mientras que en Veramar transformamos botellas de plástico recolectadas en Guatemala en hermosos trajes de baño, 4ocean lleva a cabo limpiezas masivas en océanos, ríos y costas de todo el mundo.</p>
                <p className='my-4'>Juntos, amplificamos nuestro impacto, combinando la creación de productos sostenibles con la acción directa de limpieza. Esta alianza nos permite no solo reducir la cantidad de plástico que llega a nuestros océanos, sino también generar conciencia sobre la importancia de la responsabilidad individual y colectiva en la protección del medio ambiente.  </p>
                <p className='font-bold'>El impacto de la colaboración en Guatemala</p>
                <p className='my-4'>Nuestra colaboración con 4ocean se extiende a las playas de El Paredón, donde nuestro movimiento “Veramar por el Mar” cobra vida. Juntos, organizamos jornadas de limpieza que reúnen a voluntarios apasionados por preservar la belleza natural de Guatemala.</p>
                <ul className='my-4'>
                    <li>Las jornadas de limpieza conjuntas permiten recolectar grandes cantidades de desechos plásticos y otros contaminantes que amenazan la vida marina y el ecosistema costero.</li>
                    <li>La presencia de 4ocean en Guatemala, con su experiencia y recursos, fortalece nuestros esfuerzos locales y nos permite alcanzar un mayor impacto.</li>
                    <li>La colaboración genera conciencia sobre la problemática de la contaminación plástica en las comunidades locales, inspirando a más personas a unirse al movimiento por un océano más limpio.</li>
                </ul>
                <p className='my-4'>“4ocean ha recuperado cientos de miles de libras de basura de El Paredón tan solo este año. Con un equipo dedicado a un océano más limpio, todo es posible.” </p>
                <p className='font-bold'>Cómo puedes unirte al movimiento</p>
                <p className='my-4'>La protección de nuestros océanos es una responsabilidad compartida. Tú también puedes ser parte del cambio y unirte al movimiento por un futuro más sostenible. Aquí te contamos cómo:</p>
                <ul className='my-4'>
                    <li><p className='font-bold'>Participa en nuestras jornadas de limpieza:</p>Mantente atento a nuestras redes sociales para conocer las fechas y lugares de las próximas jornadas de limpieza en El Paredón. ¡Tu ayuda es invaluable!</li>
                    <li><p className='font-bold'>Apoya a Veramar:</p>Al adquirir nuestros trajes de baño, no solo te ves bien, sino que también contribuyes a la reducción de residuos plásticos y al empoderamiento de mujeres en Guatemala.</li>
                    <li><p className='font-bold'>Conoce más sobre 4ocean:</p>Visita su página web y descubre cómo puedes apoyar su misión global de limpieza de océanos. Puedes unirte a sus limpiezas, adquirir sus productos o hacer una donación.</li>
                    <li><p className='font-bold'>Adopta hábitos de consumo responsable:</p>Reduce tu consumo de plástico, reutiliza y recicla siempre que sea posible. Pequeños cambios en tu día a día pueden generar un gran impacto.</li>
                </ul>
                <p className='my-4'>En Veramar, creemos que juntos podemos hacer la diferencia. Uniendo fuerzas con organizaciones como 4ocean y con la participación de la comunidad, podemos construir un futuro donde nuestros océanos estén libres de contaminación y las futuras generaciones puedan disfrutar de su belleza y riqueza natural.</p>

                <form className='flex flex-col items-start mx-auto mini:w-full tablet:w-[60%]  font-semibold my-6'>
                    <p className='text-[#748371] mini:text-[20px] tablet:text-[30px] font-normal' style={{ fontFamily: "'Frunchy', sans-serif" }} >Deja una respuesta</p>
                    <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] my-3'>Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con </p>
                    <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Comentario</p>
                    <textarea className='py-16 w-full rounded border px-2 border-[#666] my-2  outline-[#e5e5e5]'  placeholder='Mensaje' ></textarea>
                    <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Nombre</p>
                    <input className='py-2 w-full rounded border px-2 border-[#666] my-2  outline-[#e5e5e5]'  type="number" placeholder='Número' />
                    <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Correo electrónico</p>
                    <input required className='py-2 w-full rounded px-2 border  border-[#666] my-2  outline-[#e5e5e5]'  type="email" placeholder='Correo electrónico' />
                    <div className='flex gap-3 items-center my-3'>
                        <input type="checkbox" name="" id="" />
                        <p className='text-[#748371] mini:text-[14px] tablet:text-[17px] '>Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</p>
                    </div>
                    <button className='bg-[#d0c5ad] font-semibold mini:text-[12px] tablet:text-[16px] mb-1 px-6 py-2 rounded-[5px] border hover:bg-[#748371] text-black hover:text-white transition duration-200'>Publicar el comentario</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Article