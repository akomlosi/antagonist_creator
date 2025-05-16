export const EASY = "easy";
export const STANDARD = "standard";
export const ELITE = "elite";
export const OVERWHELMING = "overwhelming";

const easy = (count) => Array(count).fill(EASY);
const standard = (count) => Array(count).fill(STANDARD);
const elite = (count) => Array(count).fill(ELITE);
const overwhelming = (count) => Array(count).fill(OVERWHELMING);

// Extend with Elite and Overwhelming
// if you wanna have quite impossible challenges... I don't...
export const availableDifficulties = [EASY, STANDARD];

export const encounterDifficulty = {
  // one-member crew
  1: {
    [EASY]: [[easy(1)]],
    [STANDARD]: [[standard(1)], [...easy(2)]],
    [ELITE]: [
      [elite(1)],
      [...standard(2)],
      [...standard(1), ...easy(2)],
      [...easy(3)],
    ],
    [OVERWHELMING]: [
      [overwhelming(1)],
      [...elite(2)],
      [...elite(1), ...standard(2)],
      [...elite(1), ...easy(3)],
      [...standard(3)],
      [...standard(2), ...easy(3)],
      [...easy(4)],
    ],
  },
  // three-member crew
  3: {
    [EASY]: [[...easy(3)], [...easy(1), ...standard(1)]],
    [STANDARD]: [
      [...standard(3)],
      [...easy(2), ...standard(2)],
      [...easy(4), ...standard(1)],
      [...easy(6)],
      [...elite(1), ...easy(2)],
    ],
    [ELITE]: [
      [...elite(3)],
      [...elite(2), ...standard(2)],
      [...elite(1), ...standard(4)],
      [...elite(2), ...easy(4)],
      [...elite(1), ...easy(8)],
      [...standard(6)],
      [...easy(10)],
    ],
    [OVERWHELMING]: [
      [...overwhelming(3)],
      [...overwhelming(2), ...elite(2)],
      [...overwhelming(1), ...elite(4)],
      [...overwhelming(2), ...standard(8)],
      [...overwhelming(1), ...standard(12)],
      [...overwhelming(2), ...easy(16)],
      [...overwhelming(1), ...easy(20)],
      [...easy(24)],
    ],
  },
  // five-member crew
  5: {
    [EASY]: [
      [...easy(5)],
      [...standard(2), ...easy(1)],
      [...standard(1), ...easy(3)],
      [...elite(1), ...easy(1)],
    ],
    [STANDARD]: [
      [...standard(5)],
      [...standard(4), ...easy(2)],
      [...standard(3), ...easy(4)],
      [...standard(2), ...easy(6)],
      [...standard(1), ...easy(8)],
      [...elite(2), ...standard(1)],
      [...elite(1), ...standard(3)],
      [...elite(2), ...easy(4)],
      [...elite(1), ...easy(6)],
      [...easy(10)],
    ],
    [ELITE]: [
      [...elite(5)],
      [...elite(4), ...easy(4)],
      [...elite(3), ...easy(8)],
      [...elite(2), ...easy(12)],
      [...elite(1), ...easy(16)],
      [...elite(4), ...standard(2)],
      [...elite(3), ...standard(4)],
      [...elite(2), ...standard(6)],
      [...elite(1), ...standard(8)],
      [...easy(20)],
      [...standard(10)],
      [...overwhelming(1), ...elite(1)],
      [...overwhelming(1), ...standard(2)],
      [...overwhelming(1), ...easy(4)],
      [...standard(5), ...easy(10)],
    ],
    [OVERWHELMING]: [
      [...overwhelming(5)],
      [...overwhelming(4), ...elite(2)],
      [...overwhelming(3), ...elite(4)],
      [...overwhelming(2), ...elite(6)],
      [...overwhelming(1), ...elite(8)],
      [...overwhelming(4), ...standard(4)],
      [...overwhelming(3), ...standard(8)],
      [...overwhelming(2), ...standard(12)],
      [...overwhelming(1), ...standard(16)],
      [...elite(10)],
      [...standard(20)],
      [...easy(40)],
      [...elite(8), ...standard(4)],
      [...standard(10), ...easy(20)],
    ],
  },
};
