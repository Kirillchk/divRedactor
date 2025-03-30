import logo from '/src/assets/logo.png'
import img0 from '/src/assets/0.png'
import img1 from '/src/assets/1.png'
import img2 from '/src/assets/2.png'
import img3 from '/src/assets/3.png'
import img4 from '/src/assets/4.png'
import img5 from '/src/assets/5.png'

function Homepage() {
  return (
    <div className="bg-gray-800 overflow-x-hidden" >
      {/* Навигационная панель */}
      <nav className="fixed inset-0 z-10 h-10 bg-gray-900 opacity-100 hover:opacity-100">
        <div className="mx-10 flex justify-between items-center">
			<a href="/" class="text-gray-200 text-2xl font-bold">
				<img 
					href="/"
					src={logo}
					className="mt-1 h-8"
				/>
		  	</a>
          <a href="/redactor" className="text-gray-400 hover:text-gray-200">
            создать проект
          </a>
        </div>
      </nav>

      {/* Изображение и заголовок */}
      <img
        src={img0}
        className="mt-10 w-full h-64 object-cover"
      />
      <div className="absolute inset-x-0 top-0 mt-10 m-auto text-gray-700 text-8xl font-bold pt-20 w-full h-64 text-center tracking-widest">
        DIVredactor
      </div>

      {/* Основной контент */}
      <nav className="bg-gray-600 rounded-lg mx-4 md:mx-24 mt-4 w-auto h-full mb-8">
      {/* Карточка 1 */}
      <div className="mx-4 md:mx-24 h-96 flex justify-center items-center">
          <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
            <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between">
              <img
                src={img1}
                className="mt-4 w-2/5 h-5/6"
              />
              <div className="mt-6 w-screen md:w-3/6 h-auto text-xl text-left tracking-wider leading-8">
              наш проект является конструктором сайтов, с возможностью изменения разметки html и внешнего вида css, созданным для облегчённого создания сайтов и более наглядного обучения в сфере front-end'а<br /><br /><br />П.С. : для открытия меню нажмите SHIFT + H
              </div>
            </div>
          </div>
        </div>

        {/* Карточка 2 */}
        <div className="mx-4 md:mx-24 h-96 flex justify-center items-center ">
          <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
            <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between">
              <div className="mt-6 w-full md:w-3/6 h-auto text-xl text-left tracking-wider leading-8">
                  в верхнем меню вы можете найти такие функции, как:<br /><br />меню - переход на главную страницу сайта(по нажатию логотипа)<br />загрузить - открыть внешний проект<br />сохранить - выгрузить созданный проект<br />новый проект - начать с чистого листа
              </div>
              <img
                src={img2}
                className="mt-4 w-2/5 h-5/6"
              />
            </div>
          </div>
        </div>

        {/* Карточка 3 */}
        <div className="mx-4 md:mx-24 h-96 flex justify-center items-center">
          <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
            <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between">
            <img
                src={img3}
                className="mt-4 w-2/5 h-5/6"
              />
              <div className="mt-6 w-screen md:w-3/6 h-auto text-xl text-left tracking-wider leading-8">
                  в левой части экрана распологается список готовых шаблонов элементов, которые вы можете использовать при создании своего проекта, в дальнейшем вы сможете их видоизменять  
              </div>
            </div>
          </div>
        </div>

      {/* Карточка 4 */}
      <div className="mx-4 md:mx-24 h-96 flex justify-center items-center ">
          <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
            <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between">
              <div className="mt-6 w-full md:w-3/6 h-auto text-xl text-left tracking-wider leading-8">
                  справа сверху находится окно с иерархией вашего проекта, с помощью него выможете отслеживать вложенность ваших элементов, а также группы, к которым они принадлежат
                </div>
                <img
                  src={img4}
                  className="mt-4 w-2/5 h-5/6"
                />
              </div>
            </div>
          </div>

        {/* Карточка 5 */}
        <div className="mx-4 md:mx-24 h-96 flex justify-center items-center">
            <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
              <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between">
              <img
                  src={img5}
                  className="mt-4 w-2/5 h-5/6"
                />
                <div className="mt-6 w-screen md:w-3/6 h-auto text-xl text-left tracking-wider leading-8">
                    в нижней же части правого меню находится редактор css, изменяя параметры выбранного свойства объекта вы сможете изменять внешний вид элементов
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Homepage;