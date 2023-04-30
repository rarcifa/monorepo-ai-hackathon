import { useAppDispatch } from 'app/hooks';
import { generateFloorPlansAction } from 'features/floorplan/actions/generateFloorPlansAction';
import { useState, useCallback } from 'react';
import styles from './index.module.scss';
import { Button } from 'app/components/Button';

export function Inputs(): JSX.Element {
  const [room, setRoom] = useState({
    room_one: '',
    room_two: '',
    room_three: '',
  });

  const [input, setInput] = useState({
    total_area_input_one: 0,
    total_area_input_two: 0,
    room_one_input_one: 0,
    room_one_input_two: 0,
    room_two_input_one: 0,
    room_two_input_two: 0,
    room_three_input_one: 0,
    room_three_input_two: 0,
  });

  const dispatch = useAppDispatch();

  const generateOnClick = useCallback(() => {
    dispatch(generateFloorPlansAction(input));
  }, [input, dispatch]);

  const handleOnChange = (input: string, value: string) => {
    setInput((prevBody) => ({
      ...prevBody,
      [input]: value,
    }));

    setRoom((prevBody) => ({
      ...prevBody,
      [input]: value,
    }));
  };

  let roomOneString;
  let roomTwoString;
  let roomThreeString;

  if (room.room_one.length) {
    roomOneString = `There is also a
    ${room.room_one} of ${input.room_one_input_one}x
    ${input.room_one_input_two} ft2, `;
  }

  if (room.room_two.length) {
    roomTwoString = `There is also a
    ${room.room_one} of ${input.room_two_input_one}x
    ${input.room_two_input_two} ft2, `;
  }

  if (room.room_three.length) {
    roomThreeString = `There is also a
    ${room.room_one} of ${input.room_three_input_one}x
    ${input.room_three_input_two} ft2`;
  }

  return (
    <div className={styles.inputsContainer}>
      <div className={styles.inputRow}>
        <span className={styles.room}>Total Area</span>
        <span className={styles.divider}>:</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('total_area_input_one', e.target.value)
          }
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('total_area_input_two', e.target.value)
          }
        />
        <span className={styles.divider}>
          ft <sup>2</sup>
        </span>
      </div>
      <div className={styles.inputRow}>
        <input
          className={styles.room}
          placeholder="Room Name"
          onChange={(e: any) => handleOnChange('room_one', e.target.value)}
        />
        <span className={styles.divider}>:</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('room_one_input_one', e.target.value)
          }
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('room_one_input_two', e.target.value)
          }
        />
        <span className={styles.divider}>
          ft <sup>2</sup>
        </span>
      </div>
      <div className={styles.inputRow}>
        <input
          className={styles.room}
          placeholder="Room Name"
          onChange={(e: any) => handleOnChange('room_two', e.target.value)}
        />
        <span className={styles.divider}>:</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('room_two_input_one', e.target.value)
          }
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('room_two_input_two', e.target.value)
          }
        />
        <span className={styles.divider}>
          ft <sup>2</sup>
        </span>
      </div>
      <div className={styles.inputRow}>
        <input
          className={styles.room}
          placeholder="Room Name"
          onChange={(e: any) => handleOnChange('room_three', e.target.value)}
        />
        <span className={styles.divider}>:</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('room_three_input_one', e.target.value)
          }
        />
        <span className={styles.divider}>x</span>
        <input
          className={styles.input}
          onChange={(e: any) =>
            handleOnChange('room_three_input_two', e.target.value)
          }
        />
        <span className={styles.divider}>
          ft <sup>2</sup>
        </span>
      </div>
      <div className={styles.generate}>
        <Button onClick={() => generateOnClick()}>Generate</Button>
      </div>
      <div className={styles.generate}>
        <div className={styles.inputText}>
          Generate a floor plan in black and white that has 3 rooms in total.
          The Total area will cover {input.total_area_input_one}x
          {input.total_area_input_two} ft<sup>2</sup>. {roomOneString}
          {roomTwoString}
          {roomThreeString}
        </div>
      </div>
    </div>
  );
}
