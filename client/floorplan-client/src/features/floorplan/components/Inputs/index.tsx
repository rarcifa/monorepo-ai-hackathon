import { useAppSelector, useAppDispatch } from 'app/hooks';
import { generateFloorPlansAction } from 'features/floorplan/actions/generateFloorPlansAction';
import { IFloorplanSlice } from 'features/floorplan/floorplanSlice';
import { IResult } from 'features/types/floorplan';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';

export function Inputs(): JSX.Element {
  const data: IFloorplanSlice = useAppSelector((state) => state.floorplan);
  const generatedFloorplan: IResult | undefined = data.results;

  const [totalFloor] = useState<number[]>([10, 10]);
  const [roomOneFloor] = useState<number[]>([10, 10]);
  const [roomTwoFloor] = useState<number[]>([10, 10]);
  const [roomThreeFloor] = useState<number[]>([10, 10]);

  // check results in console
  console.log(generatedFloorplan);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      generateFloorPlansAction({
        totalFloor,
        roomOneFloor,
        roomTwoFloor,
        roomThreeFloor,
      })
    );
  }, [totalFloor, roomOneFloor, roomTwoFloor, roomThreeFloor, dispatch]);

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}>Total Floor:</span>
        <input className={styles.input} />
        <span className={styles.divider}>x</span>
        <input className={styles.input} /> m<sup>2</sup>
      </div>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}> Room One:</span>
        <input className={styles.input} />
        <span className={styles.divider}>x</span>
        <input className={styles.input} /> m<sup>2</sup>
      </div>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}> Roome Two:</span>
        <input className={styles.input} />
        <span className={styles.divider}>x</span>
        <input className={styles.input} /> m<sup>2</sup>
      </div>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}> Room Three:</span>
        <input className={styles.input} />
        <span className={styles.divider}>x</span>
        <input className={styles.input} /> m<sup>2</sup>
      </div>
    </div>
  );
}
