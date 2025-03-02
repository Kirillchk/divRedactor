function Homepage() {
    return (
      <div className="bg-gray-800 overflow-x-hidden" >
        {/* Навигационная панель */}
        <nav className="fixed inset-0 z-10 h-10 bg-gray-900 opacity-100 hover:opacity-100">
          <div className="mx-10 flex justify-between items-center">
            <a className="text-gray-200 text-2xl font-bold">логотип</a>
            <a href="/redactor" className="text-gray-400 hover:text-gray-200">
              создать проект
            </a>
          </div>
        </nav>
  
        {/* Изображение и заголовок */}
        <img
          src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&n=13"
          className="mt-10 w-full h-64 object-cover"
        />
        <div className="absolute inset-x-0 top-0 mt-10 m-auto text-gray-200 text-8xl font-bold pt-20 w-full h-64 text-center tracking-wider">
          название проекта
        </div>
  
        {/* Основной контент */}
        <nav className="bg-gray-600 rounded-lg mx-4 md:mx-24 mt-7 w-auto h-full mb-8">
          {/* Карточка 1 */}
          <div className="mx-4 md:mx-24 h-96 justify-center items-center relative">
            <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
              <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between items-center">
                <img
                  src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&n=13"
                  className="mt-6 h-auto "
                />
                <div className="mt-6 w-screen md:w-2/5 h-auto text-xl text-left tracking-wider z-10">
                  тесттесттесттесттесттесттесттест
                </div>
              </div>
            </div>
          </div>
  
          {/* Карточка 2 */}
          <div className="mx-4 md:mx-24 h-96 flex justify-center items-center ">
            <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
              <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between items-center">
                <div className="mt-6 w-full md:w-2/5 h-auto text-xl text-left tracking-wider">
                тесттесттесттесттесттесттесттесттесттесттест
                  
                </div>
                <img
                  src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&n=13"
                  className="mt-6   h-auto"
                />
              </div>
            </div>
          </div>
  
          {/* Карточка 3 */}
          <div className="mx-4 md:mx-24 h-96 flex justify-center items-center">
            <div className="bg-gray-700 rounded-lg mx-2 h-80 w-full text-gray-200 shadow-2xl">
              <div className="mx-4 md:mx-10 flex flex-col md:flex-row justify-between items-center">
                <img
                  src="https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&n=13"
                  className="mt-6  h-auto"
                />
                <div className="mt-6 w-screen md:w-2/5 h-auto text-xl text-left tracking-wider">
                тесттесттесттесттесттесттесттесттесттесттест
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Homepage;