import { useAppSelector } from 'app/hooks';
import { IFloorplanSlice } from 'features/floorplan/floorplanSlice';
import { IResult } from 'features/types/floorplan';
import styles from './index.module.scss';

export function Output(): JSX.Element {
  const data: IFloorplanSlice = useAppSelector((state) => state.floorplan);
  const generatedFloorplan: IResult | undefined = data.results;

  const css = {
    backgroundImage: `url(${generatedFloorplan?.data})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'initial',
    backgroundAttachment: 'initial',
    backgroundOrigin: 'initial',
    backgroundClip: 'initial',
    backgroundColor: 'initial',
  };

  return (
    <div className={styles.outputContainer} style={css}>
      <div className={styles.output} />
    </div>
  );
}
