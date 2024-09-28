import { cn } from '@/lib/utils';
import SectionLine from './section-line';
import BorderImg from './border-img';
import LineRombs from './line-rombs';

interface Props {
  title: string;
  text?: string;
  img?: string;
  imgClassName?: string;
  arr?: string[];
  line?: boolean;
  rombs?: boolean;
}

const InfoBlock = ({ text, title, img, imgClassName, arr, line = false, rombs = false }: Props) => {
  return (
    <section className="flex flex-col gap-12">
      <h2 className="h2 kaushan">{title}</h2>

      {text && (
        <div className={cn('flex items-start gap-12', {})}>
          <p style={{ letterSpacing: '-4%' }} className="text-ON_SURFACE_VAR">
            {text}
          </p>
          {img && <BorderImg className={cn(imgClassName)} img={img} />}
        </div>
      )}
      {arr && (
        <div className="flex flex-col gap-6">
          {arr?.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}

      {line && <SectionLine />}
      {rombs && <LineRombs />}
    </section>
  );
};

export default InfoBlock;
