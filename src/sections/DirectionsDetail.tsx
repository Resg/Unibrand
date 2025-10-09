import { useConfig } from '../store/hooks'

export default function DirectionsDetail() {
  const config = useConfig()!
  const dd = config.sections.directionsDetail

  return (
    <section id="directions-detail" className="bg-sky-100 text-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-0 space-y-0 snap-y">

        {/* Оптовая торговля — текст и оформление один в один с презентацией, без конфига */}
        <div id="trade" className="md:h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-48">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-brand">Оптовая торговля</h2>
            <div className="prose prose-invert mt-4 max-w-none">
              <p>
                Мы предлагаем тщательно отобранный портфель товаров, которые ежедневно востребованы на рынке.
                Продаваемая продукция — это стабильный оборот и удовлетворенный потребитель. Ассортимент:
                обувная косметика, чистящие средства для дома, репелленты, инсектициды, товары для гриля и шашлыка,
                ароматические диффузоры, диетическое питание. Наше ключевое преимущество  —   ши рокое присутствие:
                н аша дистрибьюторская сеть охватывает ключевые рынки региона. Российская Федерация, Казахстан,
                Белоруссия и другие страны СНГ — везде мы гарантируем стабильные поставки и сервис.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {dd.trade && dd.trade.image && (
              <img
                src={dd.trade.image}
                alt={dd.trade.title}
                className="max-h-[80vh] rounded-2xl shadow"
              />
            )}
          </div>
        </div>

        {/* Складская логистика (3PL) — текст и оформление один в один с презентацией, без конфига */}
        <div id="logistics" className="md:h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-brand">Складская логистика (3PL)</h2>
            <div className="prose prose-invert mt-4 max-w-none">
              <p>
                Сконцентрируйтесь на развитии бизнеса, а мы возьмем на себя всю цепочку перемещения товара.
                Полный комплекс 3PL-услуг: от приемки до финальной доставки. Услуги:  мы оказываем полный комплекс
                складских и транспортных услуг. Осуществляем доставку и хранение, управление складскими запасами,
                комплектацию заказов и доставку до пункта назначения. . Наше ключевое преимущество — эффективность:
                мы снижаем ваши операционные издержки и повышаем скорость оборачиваемости товара.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {dd.logistics && dd.logistics.image && (
              <img
                src={dd.logistics.image}
                alt={dd.logistics.title}
                className="max-h-[80vh] rounded-2xl shadow"
              />
            )}
          </div>
        </div>

        {/* Фулфилмент для маркетплейсов — текст и оформление один в один с презентацией */}
        <div id="fulfillment" className="md:h-[90vh] snap-start grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center py-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-brand">Фулфилмент для маркетплейсов</h2>
            <div className="prose prose-invert mt-4 max-w-none">
              <p>
                <b>Выходите на маркетплейсы с легкостью!</b> Мы оказываем полный цикл
                услуг для e-commerce. Мы превратим ваш товар в готовую к продаже единицу
                на любой торговой площадке.
              </p>

              <p><b>Услуги:</b></p>
              <ul className="mt-4 list-disc pl-5">
                <li>
                  стеллажное хранение, адресное хранение с гарантией полной сохранности
                  на чистом сухом и теплом складе с видеонаблюдением 24/7;
                </li>
                <li>
                  упаковка и фасовка товаров в строгом соответствии с требованиями
                  популярных маркетплейсов и интернет-магазинов;
                </li>
                <li>
                  любые виды маркировки: стикеры, термоэтикетки; товар будет подготовлен
                  согласно требованиям торговых площадок;
                </li>
                <li>
                  эффективные решения по доставке товара на склады маркетплейсов по всей
                  России.
                </li>
              </ul>

              <p>
                <b>Наше ключевое преимущество — 100% соответствие:</b> товар подготовлен
                строго по регламентам Wildberries, Ozon, Яндекс.Маркета и других.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            {dd.fulfillment && dd.fulfillment.image && (
              <img
                src={dd.fulfillment.image}
                alt={dd.fulfillment.title}
                className="max-h-[80vh] rounded-2xl shadow"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
