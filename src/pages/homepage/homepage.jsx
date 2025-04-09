import logo from "/src/assets/logo.png";
import img0 from "/src/assets/0.png";
import img1 from "/src/assets/1.png";
import img2 from "/src/assets/2.png";
import img3 from "/src/assets/3.png";
import img4 from "/src/assets/4.png";
import img5 from "/src/assets/5.png";

function Homepage() {
  return (
    <div className="bg-gray-800 overflow-x-hidden">
      {/* Навигационная панель */}
      <nav className="w-full inset-0 z-10 h-16 bg-gray-900 opacity-100 hover:opacity-100">
        <div className="mx-10 flex justify-between items-center">
          <a href="/" class="text-gray-200 text-2xl font-bold">
            <img href="/" src={logo} className="mt-1 h-[60px]" />
          </a>
          <a href="/redactor" className="text-gray-400 hover:text-gray-200">
            Cоздать Проект
          </a>
        </div>
      </nav>

      {/* Изображение и заголовок */}
      <img src={img0} className="mt-10 w-full h-64 object-cover" />
      <div className="absolute inset-x-0 top-0 mt-10 m-auto text-gray-700 font-bold pt-20 w-full h-64 text-center tracking-widest">
        <div
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl duration-500  ease-out  hover:scale-110 transform-gpu 
          transition-transform">
          DIVredactor
        </div>
      </div>

      {/* Основной контент */}
      <nav className="bg-gray-600 rounded-lg mx-4 md:mx-24 mt-4 w-auto h-full mb-8">
        {/* Карточка 1 */}
        <div className="bg-gray-600 rounded-lg mx-4 md:mx-24 my-4 w-auto">
          <div className="p-4 md:p-6">
            <div
              className="bg-gray-700 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-500/20
             transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out rounded-lg
              mx-2 p-4 w-full text-gray-200"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <img
                  src={img1}
                  className="mt-4 w-2/5 h-5/6 object-cover transition-all duration-500 ease-out hover:scale-104 transform-gpu"
                />
                <div className="w-full md:w-3/5 text-lg md:text-xl leading-relaxed">
                  Наш проект является конструктором сайтов с возможностью
                  изменения разметки HTML и внешнего вида CSS, созданным для
                  облегчённого создания сайтов и более наглядного обучения в
                  сфере frontend разработки.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="bg-gray-600 rounded-lg mx-4 md:mx-24 my-4 w-auto">
          <div className="p-4 md:p-6">
            <div
              className="bg-gray-700 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-500/20 
          transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out rounded-lg mx-2 
          p-4 w-full text-gray-200"
            >
              <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-8 items-center">
                <img
                  src={img2}
                  className="mt-4 w-2/5 h-5/6 object-cover transition-all duration-500 ease-out hover:scale-104 transform-gpu"
                />
                <div className="w-full md:w-3/5 text-xl md:text-xl leading-relaxed  ">
                  Для открытия интерфейса нажмите SHIFT + H. В верхнем меню вы
                  можете найти такие функции, как: Меню - переход на главную
                  страницу сайта (по нажатию на голотип). Загрузить - открыть
                  внешний проект. Сохранить - выгрузить созданный проект. Новый
                  проект - создать новый проект.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="bg-gray-600 rounded-lg mx-4 md:mx-24 my-4 w-auto">
          <div className="p-4 md:p-6">
            <div
              className="bg-gray-700 hover:bg-gray-800 hover:shadow-lg 
            hover:shadow-gray-500/20 transform hover:-translate-y-0.5 transition-all duration-300 
            ease-in-out rounded-lg mx-2 p-4 w-full text-gray-200"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <img
                  src={img3}
                  className="mt-4 w-2/5 h-5/6 object-cover transition-all duration-500 ease-out hover:scale-104 transform-gpu"
                />
                <div className="w-full md:w-3/5 text-lg md:text-xl leading-relaxed">
                  В левой части экрана распологается список готовых шаблонов
                  элементов, которые вы можете использовать при создании своего
                  проекта, в дальнейшем вы сможете их видоизменять.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Карточка 4 */}

        <div className="bg-gray-600 rounded-lg mx-4 md:mx-24 my-4 w-auto">
          <div className="p-4 md:p-6">
            <div
              className="bg-gray-700 hover:bg-gray-800 hover:shadow-lg 
          hover:shadow-gray-500/20 transform hover:-translate-y-0.5 transition-all 
          duration-300 ease-in-out rounded-lg mx-2 p-4 w-full text-gray-200"
            >
              <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-8 items-center">
                <img
                  src={img4}
                  className="mt-4 w-2/5 h-5/6 object-cover transition-all duration-500 ease-out hover:scale-104 transform-gpu"
                />
                <div className="w-full md:w-3/5 text-lg md:text-xl leading-relaxed">
                  Справа сверху находится окно с иерархией вашего проекта, с
                  помощью него вы можете отслеживать вложенность ваших
                  элементов, а также группы, к которым они принадлежат.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Карточка 5 */}

        <div className="bg-gray-600 rounded-lg mx-4 md:mx-24 my-4 w-auto">
          <div className="p-4 md:p-6">
            <div
              className="bg-gray-700 hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-500/20 
          transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out rounded-lg 
          mx-2 p-4 w-full text-gray-200"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <img
                  src={img5}
                  className="mt-4 w-2/5 h-5/6 object-cover transition-all duration-500 ease-out hover:scale-104 transform-gpu"
                />
                <div className="w-full md:w-3/5 text-lg md:text-xl leading-relaxed">
                  В нижней же части правого меню находится редактор CSS, изменяя
                  параметры выбранного свойства объекта вы сможете изменять
                  внешний вид элементов.
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </nav>
    </div>
  );
}

export default Homepage;
