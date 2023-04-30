import { useAppDispatch } from 'app/hooks';
import { generateFloorPlansAction } from 'features/floorplan/actions/generateFloorPlansAction';
import { useState, useEffect, useCallback } from 'react';
import styles from './index.module.scss';
import { Button } from 'app/components/Button';

export function Inputs(): JSX.Element {
  const [total_area_input_one, setTotal_area_input_one] = useState<number>(0);
  const [total_area_input_two, setTotal_area_input_two] = useState<number>(0);
  const [room_one_input_one, setRoom_one_input_one] = useState<number>(0);
  const [room_one_input_two, setRoom_one_input_two] = useState<number>(0);
  const [room_two_input_one, setRoom_two_input_one] = useState<number>(0);
  const [room_two_input_two, setRoom_two_input_two] = useState<number>(0);
  const [room_three_input_one, setRoom_three_input_one] = useState<number>(0);
  const [room_three_input_two, setRoom_three_input_two] = useState<number>(0);

  const dispatch = useAppDispatch();

  const generateOnClick = useCallback(() => {
    dispatch(
      generateFloorPlansAction({
        total_area_input_one,
        total_area_input_two,
        room_one_input_one,
        room_one_input_two,
        room_two_input_one,
        room_two_input_two,
        room_three_input_one,
        room_three_input_two,
      })
    );
  }, [
    total_area_input_one,
    total_area_input_two,
    room_one_input_one,
    room_one_input_two,
    room_two_input_one,
    room_two_input_two,
    room_three_input_one,
    room_three_input_two,
    ,
    dispatch,
  ]);

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}>Total Floor:</span>
        <input
          className={styles.input}
          onChange={(e: any) => setTotal_area_input_one(e.target.value)}
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) => setTotal_area_input_two(e.target.value)}
        />
        m<sup>2</sup>
      </div>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}> Room One:</span>
        <input
          className={styles.input}
          onChange={(e: any) => setRoom_one_input_one(e.target.value)}
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) => setRoom_one_input_two(e.target.value)}
        />
        m<sup>2</sup>
      </div>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}> Roome Two:</span>
        <input
          className={styles.input}
          onChange={(e: any) => setRoom_two_input_one(e.target.value)}
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) => setRoom_two_input_two(e.target.value)}
        />
        m<sup>2</sup>
      </div>
      <div className={styles.inputRow}>
        <span className={styles.inputTitle}> Room Three:</span>
        <input
          className={styles.input}
          onChange={(e: any) => setRoom_three_input_one(e.target.value)}
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) => setRoom_three_input_two(e.target.value)}
        />
        m<sup>2</sup>
      </div>
      <div className={styles.generate}>
        <Button onClick={() => generateOnClick()}>Generate</Button>
      </div>
      <div className={styles.architectureGrid}>
        <div style={{ marginTop: 25 }}>
          <span className={styles.inputTitle}>
            Total Floor is {total_area_input_one} x {total_area_input_two}
          </span>
        </div>
        <div>
          <span className={styles.inputTitle}>
            Room One is {room_one_input_one} x {room_one_input_two}
          </span>
        </div>
        <div>
          <span className={styles.inputTitle}>
            Room Two is {room_two_input_one} x {room_two_input_two}
          </span>
        </div>
        <div>
          <span className={styles.inputTitle}>
            Room Three is {room_three_input_one} x {room_three_input_two}
          </span>
        </div>
      </div>
    </div>
  );
}
