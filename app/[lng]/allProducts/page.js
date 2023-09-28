const productTypesDetails = [{}];

const Page = () => {
  return (
    <div className="text-center py-4">
      <p className="text-dark text-lg mb-4 lg:text-5xl lg:mb-20">
        Product Types :
      </p>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 h-96 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={'Sargassum.jpg'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {'Sargassum'}
              </h1>
              <p class="leading-relaxed">
                {
                  "Sargassum is a brown macroalgae seaweed. Many of these species are distributed throughout the world's warm and tropical oceans, where they generally inhabit shallow waters and coral reefs. Sargassum is widely known for its free-floating growth method and this seaweed is widely used by the fertilizer, bioplastic, and animal feed industries."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full h-96 object-center rounded border border-gray-200 order-first lg:order-last"
              src={'Kappaphycus alvaresii.jpg'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {'Kappaphycus alvarezii'}
              </h1>
              <p class="leading-relaxed">
                {
                  'Kappaphycus alvarezii  is a carrageenan-producing seaweed that is commonly used as raw material for carrageenan industries. Carrageenan is mainly used as additives for food, beverage, cosmetics, pharmaceutical, paint, textile, and other industries. Cottonii seaweeds can also be applied as a source of growth hormone which is beneficial for organic fertilizers.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 h-96 w-full object-cover object-center rounded border border-gray-200 order-first lg:order-first"
              src={'Ulva lactuca.jpg'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {'Ulva lactuca'}
              </h1>
              <p class="leading-relaxed">
                {
                  'Ulva, also known as Sea Lettuce is an edible green algae is a seaweed that lives by sticking to rocks, gravel and coral reefs, but sometimes it can also be found floating in the sea.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 h-96 w-full object-cover object-center rounded border border-gray-200 order-first lg:order-last"
              src={'Geledium amansii.png'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {'Geledium'}
              </h1>
              <p class="leading-relaxed">
                {
                  'In many countries, Gelidium is the raw material that is widely used for the extraction of high quality agar. Gelidium content is higher than Glacilaria. Traditionally Gelidium is consumed as a vegetable and to make jelly jelly. Gelidium is often eaten raw, but can also be steamed or cooked and mixed with herbs before serving.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 h-96 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 h-96 w-full object-cover object-center rounded border border-gray-200 lg:order-first"
              src={'Gracilaria.jpg'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {'Gracillaria'}
              </h1>
              <p class="leading-relaxed">
                {
                  'Gracillaria is generally used as the main raw material for the production of edible gelatin. For food applications, it is mainly used as a source of dietary fiber, solidifying agent, mixture of various beverages, thickening and stabilizing agent. For non-food applications, Glacilaria is used in the cosmetic industrial; shampoo, cream, sunscreen, toothpaste, and pharmaceutical industries.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
