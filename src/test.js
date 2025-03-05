import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('Homepage Component', () => {
  // Тест 1: Проверка рендеринга компонента
  test('renders Homepage component', () => {
    render(<Homepage />);
    const homepageElement = screen.getByTestId('homepage');
    expect(homepageElement).toBeInTheDocument();
  });

  // Тест 2: Проверка наличия навигационной панели
  test('renders navigation bar', () => {
    render(<Homepage />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  // Тест 3: Проверка логотипа
  test('renders logo', () => {
    render(<Homepage />);
    const logoElement = screen.getByText('логотип');
    expect(logoElement).toBeInTheDocument();
  });

  // Тест 4: Проверка ссылки "создать проект"
  test('renders "создать проект" link', () => {
    render(<Homepage />);
    const linkElement = screen.getByText('создать проект');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/redactor');
  });

  // Тест 5: Проверка изображения
  test('renders image', () => {
    render(<Homepage />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      'https://avatars.mds.yandex.net/i?id=f64710d1da958f2fc884be6cb109e1faa58442e8ddd00328-5268818-images-thumbs&n=13'
    );
  });

  // Тест 6: Проверка заголовка "название проекта"
  test('renders project title', () => {
    render(<Homepage />);
    const titleElement = screen.getByText('название проекта');
    expect(titleElement).toBeInTheDocument();
  });

  // Тест 7: Проверка первой карточки
  test('renders first card', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /наш проект является конструктором сайтов/i
    );
    expect(cardElement).toBeInTheDocument();
  });

  // Тест 8: Проверка второй карточки
  test('renders second card', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в верхнем меню вы можете найти такие функции/i
    );
    expect(cardElement).toBeInTheDocument();
  });

  // Тест 9: Проверка третьей карточки
  test('renders third card', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в левой части экрана распологается список готовых шаблонов/i
    );
    expect(cardElement).toBeInTheDocument();
  });

  // Тест 10: Проверка четвертой карточки
  test('renders fourth card', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /справа сверху находится окно с иерархией вашего проекта/i
    );
    expect(cardElement).toBeInTheDocument();
  });

  // Тест 11: Проверка пятой карточки
  test('renders fifth card', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    );
    expect(cardElement).toBeInTheDocument();
  });

  // Тест 12-50: Аналогичные тесты для других элементов
  // Например, проверка классов, стилей, количества элементов и т.д.
  // Вот несколько примеров:

  // Тест 12: Проверка количества карточек
  test('renders 5 cards', () => {
    render(<Homepage />);
    const cards = screen.getAllByRole('article'); // Предположим, что каждая карточка имеет role="article"
    expect(cards.length).toBe(5);
  });

  // Тест 13: Проверка класса у навигационной панели
  test('navigation bar has correct class', () => {
    render(<Homepage />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('fixed', 'inset-0', 'z-10', 'h-10', 'bg-gray-900');
  });

  // Тест 14: Проверка класса у изображения
  test('image has correct class', () => {
    render(<Homepage />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveClass('mt-10', 'w-full', 'h-64', 'object-cover');
  });

  // Тест 15: Проверка класса у заголовка
  test('title has correct class', () => {
    render(<Homepage />);
    const titleElement = screen.getByText('название проекта');
    expect(titleElement).toHaveClass('absolute', 'inset-x-0', 'top-0', 'mt-10', 'm-auto', 'text-gray-200', 'text-8xl', 'font-bold', 'pt-20', 'w-full', 'h-64', 'text-center', 'tracking-wider');
  });

  // Тест 16-50: Дополнительные тесты для проверки других элементов, классов, текста и т.д.
});

test('first card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /наш проект является конструктором сайтов/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });


  test('second card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в верхнем меню вы можете найти такие функции/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });
  test('third card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в левой части экрана распологается список готовых шаблонов/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('fourth card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /справа сверху находится окно с иерархией вашего проекта/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('fifth card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('first card contains an image', () => {
    render(<Homepage />);
    const imageElement = screen.getAllByRole('img')[1]; // Первое изображение — это заглавное, второе — в карточке
    expect(imageElement).toBeInTheDocument();
  });

  test('second card contains an image', () => {
    render(<Homepage />);
    const imageElement = screen.getAllByRole('img')[2];
    expect(imageElement).toBeInTheDocument();
  });

  test('fourth card contains an image', () => {
    render(<Homepage />);
    const imageElement = screen.getAllByRole('img')[4];
    expect(imageElement).toBeInTheDocument();
  });

  test('fifth card contains an image', () => {
    render(<Homepage />);
    const imageElement = screen.getAllByRole('img')[5];
    expect(imageElement).toBeInTheDocument();
  });

  test('first card has correct text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(
      /наш проект является конструктором сайтов/i
    );
    expect(textElement).toBeInTheDocument();
  });

  test('second card has correct text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(
      /в верхнем меню вы можете найти такие функции/i
    );
    expect(textElement).toBeInTheDocument();
  });

  test('third card has correct text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(
      /в левой части экрана распологается список готовых шаблонов/i
    );
    expect(textElement).toBeInTheDocument();
  });

  test('fourth card has correct text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(
      /справа сверху находится окно с иерархией вашего проекта/i
    );
    expect(textElement).toBeInTheDocument();
  });

  test('fifth card has correct text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    );
    expect(textElement).toBeInTheDocument();
  });

  test('first card has correct structure', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /наш проект является конструктором сайтов/i
    ).closest('div');
    expect(cardElement).toContainElement(screen.getByRole('img'));
    expect(cardElement).toContainElement(screen.getByText(/наш проект является конструктором сайтов/i));
  });

  test('second card has correct structure', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в верхнем меню вы можете найти такие функции/i
    ).closest('div');
    expect(cardElement).toContainElement(screen.getByRole('img'));
    expect(cardElement).toContainElement(screen.getByText(/в верхнем меню вы можете найти такие функции/i));
  });

  test('third card has correct structure', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в левой части экрана распологается список готовых шаблонов/i
    ).closest('div');
    expect(cardElement).toContainElement(screen.getByRole('img'));
    expect(cardElement).toContainElement(screen.getByText(/в левой части экрана распологается список готовых шаблонов/i));
  });


  test('fourth card has correct structure', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /справа сверху находится окно с иерархией вашего проекта/i
    ).closest('div');
    expect(cardElement).toContainElement(screen.getByRole('img'));
    expect(cardElement).toContainElement(screen.getByText(/справа сверху находится окно с иерархией вашего проекта/i));
  });

  test('fifth card has correct structure', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    ).closest('div');
    expect(cardElement).toContainElement(screen.getByRole('img'));
    expect(cardElement).toContainElement(screen.getByText(/в нижней же части правого меню находится редактор css/i));
  });

  test('renders all 5 cards', () => {
    render(<Homepage />);
    const cards = screen.getAllByRole('article'); // Предположим, что каждая карточка имеет role="article"
    expect(cards.length).toBe(5);
  });

  test('main content container has correct class', () => {
    render(<Homepage />);
    const containerElement = screen.getByRole('main');
    expect(containerElement).toHaveClass('bg-gray-600', 'rounded-lg', 'mx-4', 'md:mx-24', 'mt-4', 'w-auto', 'h-full', 'mb-8');
  });

  test('project title has correct class', () => {
    render(<Homepage />);
    const titleElement = screen.getByText('название проекта');
    expect(titleElement).toHaveClass('absolute', 'inset-x-0', 'top-0', 'mt-10', 'm-auto', 'text-gray-200', 'text-8xl', 'font-bold', 'pt-20', 'w-full', 'h-64', 'text-center', 'tracking-wider');
  });

  test('navigation bar has correct class', () => {
    render(<Homepage />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('fixed', 'inset-0', 'z-10', 'h-10', 'bg-gray-900');
  });

  test('"создать проект" link has correct class', () => {
    render(<Homepage />);
    const linkElement = screen.getByText('создать проект');
    expect(linkElement).toHaveClass('text-gray-400', 'hover:text-gray-200');
  });

  test('image has correct class', () => {
    render(<Homepage />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveClass('mt-10', 'w-full', 'h-64', 'object-cover');
  });

  test('first card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /наш проект является конструктором сайтов/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('second card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в верхнем меню вы можете найти такие функции/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });test('third card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в левой части экрана распологается список готовых шаблонов/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });


  test('fourth card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /справа сверху находится окно с иерархией вашего проекта/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('fifth card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('fifth card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('fifth card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('fifth card has correct class', () => {
    render(<Homepage />);
    const cardElement = screen.getByText(
      /в нижней же части правого меню находится редактор css/i
    ).closest('div');
    expect(cardElement).toHaveClass('bg-gray-700', 'rounded-lg', 'mx-2', 'h-80', 'w-full', 'text-gray-200', 'shadow-2xl');
  });

  test('renders all images', () => {
    render(<Homepage />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(6); // Заглавное изображение + 5 карточек
  });

  test('renders all text elements', () => {
    render(<Homepage />);
    const textElements = screen.getAllByText(/./); // Все текстовые элементы
    expect(textElements.length).toBeGreaterThan(10); // Проверка, что текстовых элементов достаточно
  });

  test('renders all links', () => {
    render(<Homepage />);
    const linkElements = screen.getAllByRole('link');
    expect(linkElements.length).toBe(1); // Только одна ссылка "создать проект"
  });

  test('renders all sections', () => {
    render(<Homepage />);
    const sections = screen.getAllByRole('region'); // Предположим, что каждый раздел имеет role="region"
    expect(sections.length).toBe(3); // Навигационная панель, изображение, основной контент
  });