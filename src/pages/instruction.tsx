import PageLayout from '@/components/layout/page-layout';
import { Button } from '@/components/ui/button';

type Props = {};

const Instruction = ({}: Props) => {
  return (
    <PageLayout
      title="Muşdaklar"
      className="gap-12"
      text="Dobro pozhalovat' v razdel «Synlar, ýatlamar, gutlaglar» nashego saita, gde kazhdoe slovo napolneno iskrennost'yu i teplotoy. Zdes' vy naydete utonchennye stikhi i prozu, kotorye pokoryat serdtsa vashikh blizkikh i druzey svoey krasotoy i glubinoy emotsiy.">
      <section className="text-center h-auto w-full relative drop-shadow-INNER_SHADOW bg-no-repeat overflow-x-visible">
        <svg
          width="1200"
          height="980"
          viewBox="0 0 1200 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10">
          <defs>
            {/* Определяем паттерн для текстуры */}
            <pattern id="texture-pattern" patternUnits="userSpaceOnUse" width="1200" height="800">
              <image href="/images/texture.png" x="0" y="0" width="1200" height="800" />
            </pattern>
          </defs>
          <path
            d="M1195.37 976.301C1186.92 984.141 1183.2 976.552 1171.28 976.552C1159.37 976.552 1159.37 975.207 1147.46 975.207C1135.55 975.207 1135.55 974.993 1123.64 974.993C1111.73 974.993 1111.73 975.893 1099.81 975.893C1087.9 975.893 1087.9 975.29 1075.99 975.29C1064.08 975.29 1064.08 975.17 1052.17 975.17C1040.26 975.17 1040.26 974.938 1028.34 974.938C1016.43 974.938 1016.43 975.142 1004.52 975.142C992.61 975.142 992.61 976.617 980.698 976.617C968.787 976.617 968.787 976.236 956.875 976.236C944.964 976.236 944.964 976.849 933.052 976.849C921.14 976.849 921.14 975.494 909.229 975.494C897.317 975.494 897.317 976.691 885.406 976.691C873.494 976.691 873.494 975.049 861.582 975.049C849.671 975.049 849.671 976.942 837.759 976.942C825.848 976.942 825.848 975.262 813.936 975.262C802.025 975.262 802.025 975.216 790.123 975.216C778.221 975.216 778.211 975.095 766.31 975.095C758.369 975.095 750.428 975.095 742.486 975.095C730.575 975.095 730.575 975.207 718.673 975.207C706.762 975.207 706.762 975.067 694.85 975.067C682.938 975.067 682.938 975.327 671.027 975.327C659.115 975.327 659.115 976.997 647.204 976.997C635.292 976.997 635.292 976.877 623.381 976.877C611.469 976.877 611.469 975.067 599.557 975.067C587.646 975.067 587.646 975.977 575.734 975.977C563.823 975.977 563.823 976.292 551.911 976.292C539.999 976.292 539.999 976.96 528.088 976.96C516.176 976.96 516.176 976.506 504.265 976.506C492.353 976.506 492.353 976.162 480.442 976.162C468.53 976.162 468.53 975.735 456.618 975.735C444.707 975.735 444.707 975.309 432.795 975.309C420.884 975.309 420.884 976.403 408.972 976.403C397.06 976.403 397.06 974.947 385.149 974.947C373.237 974.947 373.237 976.209 361.326 976.209C349.414 976.209 349.414 975.17 337.502 975.17C325.591 975.17 325.591 976.84 313.679 976.84C301.768 976.84 301.768 974.938 289.856 974.938C277.945 974.938 277.945 977.109 266.033 977.109C254.121 977.109 254.121 975.494 242.21 975.494C230.298 975.494 230.298 976.617 218.387 976.617C206.475 976.617 206.475 975.494 194.563 975.494C182.652 975.494 182.652 976.997 170.74 976.997C158.829 976.997 158.829 976.283 146.917 976.283C135.005 976.283 135.005 977.044 123.094 977.044C111.182 977.044 111.182 977.016 99.2707 977.016C87.3591 977.016 87.3591 975.708 75.4476 975.708C63.536 975.708 63.536 976.589 51.6145 976.589C39.6929 976.589 39.7029 976.775 27.7814 976.775C15.8698 976.775 12.0084 984.262 3.55121 976.422C-4.83653 968.638 4.2659 965.001 4.2659 953.951C4.2659 942.902 4.89126 942.902 4.89126 931.852C4.89126 920.802 3.46187 920.802 3.46187 909.752C3.46187 898.703 3.39239 898.703 3.39239 887.653C3.39239 876.603 4.6431 876.603 4.6431 865.553C4.6431 854.504 4.31553 854.504 4.31553 843.454C4.31553 832.404 4.99052 832.404 4.99052 821.354C4.99052 810.305 4.75229 810.305 4.75229 799.255C4.75229 788.205 4.49421 788.205 4.49421 777.155C4.49421 766.106 4.88133 766.106 4.88133 755.056C4.88133 744.006 4.48428 744.006 4.48428 732.966C4.48428 721.916 3.14423 721.916 3.14423 710.875C3.14423 699.826 5.03023 699.826 5.03023 688.776C5.03023 677.726 4.62325 677.726 4.62325 666.686C4.62325 655.645 3.77951 655.636 3.77951 644.586C3.77951 633.536 4.42472 633.536 4.42472 622.496C4.42472 611.455 3.19386 611.446 3.19386 600.396C3.19386 589.347 3.72988 589.347 3.72988 578.306C3.72988 567.256 3.95819 567.256 3.95819 556.207C3.95819 545.157 4.17657 545.157 4.17657 534.107C4.17657 523.057 3.41224 523.057 3.41224 512.008C3.41224 500.958 3.00526 500.958 3.00526 489.908C3.00526 478.858 3.50158 478.858 3.50158 467.809C3.50158 456.759 4.06738 456.759 4.06738 445.709C4.06738 434.659 4.70266 434.659 4.70266 423.61C4.70266 412.56 4.58354 412.56 4.58354 401.51C4.58354 390.46 4.58354 390.46 4.58354 379.411C4.58354 368.361 3.74973 368.361 3.74973 357.311C3.74973 346.261 4.53391 346.261 4.53391 335.212C4.53391 324.162 3.05489 324.162 3.05489 313.112C3.05489 302.062 4.20634 302.062 4.20634 291.013C4.20634 279.963 3.81922 279.963 3.81922 268.913C3.81922 257.863 2.97548 257.863 2.97548 246.814C2.97548 235.764 4.29568 235.764 4.29568 224.714C4.29568 213.664 2.91592 213.664 2.91592 202.615C2.91592 191.565 3.94826 191.565 3.94826 180.515C3.94826 169.465 3.3229 169.465 3.3229 158.416C3.3229 147.366 3.08467 147.366 3.08467 136.316C3.08467 125.266 2.92585 125.266 2.92585 114.217C2.92585 103.167 2.83651 103.167 2.83651 92.1172C2.83651 81.0674 4.2659 81.0674 4.2659 70.0176C4.2659 58.9679 4.15671 58.9679 4.15671 47.9181C4.15671 36.8684 4.59347 36.8684 4.59347 25.8094C4.59347 14.7503 -4.87624 11.1228 3.5115 3.33876C11.8992 -4.44524 15.8598 3.8212 27.7714 3.8212C39.683 3.8212 39.683 3.63565 51.5946 3.63565C63.5062 3.63565 63.5062 3.86759 75.4178 3.86759C87.3294 3.86759 87.3294 3.10682 99.241 3.10682C111.153 3.10682 111.153 4.04386 123.064 4.04386C134.976 4.04386 134.976 4.51703 146.887 4.51703C158.799 4.51703 158.799 3.3202 170.71 3.3202C182.622 3.3202 182.622 3.45009 194.534 3.45009C206.445 3.45009 206.445 2.92126 218.357 2.92126C230.268 2.92126 230.268 4.61908 242.18 4.61908C254.092 4.61908 254.092 2.97693 266.003 2.97693C277.915 2.97693 277.915 2.9491 289.826 2.9491C301.738 2.9491 301.738 2.9491 313.65 2.9491C325.561 2.9491 325.561 4.03459 337.473 4.03459C349.384 4.03459 349.384 3.29237 361.296 3.29237C373.207 3.29237 373.207 2.92126 385.119 2.92126C397.031 2.92126 397.031 4.79536 408.932 4.79536C420.834 4.79536 420.844 4.30364 432.746 4.30364C444.647 4.30364 444.657 3.30165 456.569 3.30165C468.48 3.30165 468.48 4.02531 480.382 4.02531C492.284 4.02531 492.294 3.06971 504.205 3.06971C516.117 3.06971 516.117 4.12736 528.028 4.12736C539.94 4.12736 539.94 3.7377 551.851 3.7377C563.763 3.7377 563.763 4.57269 575.675 4.57269C587.586 4.57269 587.586 2.66149 599.498 2.66149C611.409 2.66149 611.409 2.70788 623.321 2.70788C635.233 2.70788 635.233 4.09025 647.144 4.09025C659.056 4.09025 659.056 4.54486 670.967 4.54486C682.879 4.54486 682.879 4.54486 694.791 4.54486C706.702 4.54486 706.702 3.19032 718.614 3.19032C730.525 3.19032 730.525 4.28509 742.437 4.28509C754.348 4.28509 754.348 2.64293 766.26 2.64293C778.172 2.64293 778.172 4.2387 790.083 4.2387C801.995 4.2387 801.995 3.04187 813.906 3.04187C825.818 3.04187 825.818 4.74897 837.73 4.74897C849.641 4.74897 849.641 3.96964 861.553 3.96964C873.464 3.96964 873.464 2.95837 885.376 2.95837C897.287 2.95837 897.287 3.83976 909.199 3.83976C921.111 3.83976 921.111 4.10881 933.022 4.10881C944.934 4.10881 944.934 3.34804 956.845 3.34804C968.757 3.34804 968.757 3.53359 980.669 3.53359C992.58 3.53359 992.58 2.84704 1004.49 2.84704C1016.4 2.84704 1016.4 4.12736 1028.31 4.12736C1040.23 4.12736 1040.23 4.10881 1052.14 4.10881C1064.05 4.10881 1064.05 4.34075 1075.96 4.34075C1087.87 4.34075 1087.87 3.35731 1099.78 3.35731C1111.7 3.35731 1111.7 3.27382 1123.61 3.27382C1135.52 3.27382 1135.52 4.13664 1147.44 4.13664C1159.36 4.13664 1159.35 3.51504 1171.27 3.51504C1183.2 3.51504 1186.61 -4.05557 1195.08 3.79337C1203.46 11.5774 1194.92 14.8153 1194.92 25.8558C1194.92 36.8962 1194.47 36.9055 1194.47 47.9553C1194.47 59.005 1194.47 59.005 1194.47 70.0548C1194.47 81.1045 1196.11 81.1045 1196.11 92.1543C1196.11 103.204 1195.01 103.204 1195.01 114.254C1195.01 125.304 1196.15 125.304 1196.15 136.353C1196.15 147.403 1195.88 147.403 1195.88 158.453C1195.88 169.503 1194.18 169.503 1194.18 180.552C1194.18 191.602 1195.8 191.602 1195.8 202.652C1195.8 213.702 1194.17 213.702 1194.17 224.751C1194.17 235.801 1195.99 235.801 1195.99 246.841C1195.99 257.891 1195.02 257.891 1195.02 268.932C1195.02 279.981 1194.7 279.981 1194.7 291.031C1194.7 302.081 1196.04 302.081 1196.04 313.121C1196.04 324.162 1195.49 324.171 1195.49 335.221C1195.49 346.271 1195.24 346.271 1195.24 357.311C1195.24 368.361 1196.09 368.361 1196.09 379.411C1196.09 390.46 1194.4 390.46 1194.4 401.501C1194.4 412.551 1196.13 412.551 1196.13 423.6C1196.13 434.65 1195.28 434.65 1195.28 445.7C1195.28 456.75 1195.35 456.75 1195.35 467.799C1195.35 478.849 1194.32 478.849 1194.32 489.899C1194.32 500.949 1195.33 500.949 1195.33 511.998C1195.33 523.048 1194.33 523.048 1194.33 534.098C1194.33 545.148 1196.28 545.148 1196.28 556.197C1196.28 567.247 1196.01 567.247 1196.01 578.297C1196.01 589.347 1195.34 589.347 1195.34 600.396C1195.34 611.446 1194.36 611.446 1194.36 622.496C1194.36 633.546 1195.98 633.546 1195.98 644.595C1195.98 655.645 1194.19 655.645 1194.19 666.695C1194.19 677.745 1194.94 677.745 1194.94 688.794C1194.94 699.844 1194.02 699.844 1194.02 710.894C1194.02 721.944 1196.2 721.944 1196.2 732.993C1196.2 744.043 1194.51 744.043 1194.51 755.093C1194.51 766.143 1194.71 766.143 1194.71 777.192C1194.71 788.242 1194.81 788.242 1194.81 799.292C1194.81 810.342 1194.13 810.342 1194.13 821.391C1194.13 832.441 1196.01 832.441 1196.01 843.491C1196.01 854.541 1195.65 854.541 1195.65 865.59C1195.65 876.64 1195.47 876.64 1195.47 887.69C1195.47 898.74 1195.16 898.74 1195.16 909.789C1195.16 920.839 1194.98 920.839 1194.98 931.889C1194.98 942.939 1193.43 943.022 1195.98 953.812C1198.73 965.465 1203.75 968.564 1195.36 976.348L1195.37 976.301Z"
            fill="#FFEBC2"
          />
        </svg>
        <div className="w-[640px] mx-auto flex flex-col gap-12 py-10">
          <h2 className="h2 kaushan">Kak zaregistrirowatsýa</h2>
          <div className="leading-[150%]">
            <span className="mb-4">1 shag</span>
            <h4 className="font-semibold mb-2">Vvedite vash email</h4>
            <h5 className="text-[18px] leading-[145%] mb-6">
              Ukazhite vash deystvuyushchiy adres elektronnoy pochty. On budet ispol'zovat'sya dlya
              vkhoda na sayt i polucheniya vazhnykh uvedomleniy.
            </h5>
            <div className="text-[16px] font-medium leading-[150%] mb-2">
              Vvedite email v pole nizhe i nazhmite «Dalee»
            </div>
            <input type="text" placeholder="Подсказка" className="input w-full mb-4" />
            <Button className="w-full">Dalee</Button>
          </div>

          <div className="leading-[150%]">
            <span className="mb-4">2 shag</span>
            <h4 className="font-semibold mb-2">Pridumayte parol'</h4>
            <h5 className="text-[18px] leading-[145%] mb-6">
              Sozdajte parol' dlya vashego akkaunta. Parol' dolzhen soderzhat' ne menee 8 simvolov,
              vklyuchaya bukvy, tsifry i spetsial'nye simvoly.
            </h5>
            <div className="text-[16px] font-medium leading-[150%] mb-4">
              <span>Vvedite parol'</span>
              <input type="text" placeholder="Подсказка" className="input w-full mt-2 mb-4" />
              <Button className="w-full">Dalee</Button>
            </div>
            <div className="text-[16px] font-medium leading-[150%]">
              <span>Powtorite parol' i podtverdite ego, zatem nazhmite «Dalee».</span>
              <input type="text" placeholder="Подсказка" className="input w-full mt-2 mb-4" />
              <Button className="w-full">Dalee</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Instruction;
