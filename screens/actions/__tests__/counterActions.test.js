import { increment, decrement, reset } from '../counterActions'

describe('counterActions', () => {
  describe('counter', () => {
    const actionCreator = (url, type, id, currentVal) => {
      const typeUpperCase = type.toUpperCase();

      return {
        type: `${typeUpperCase}_REQUEST`,
        payload: { id, currentVal },
        meta: {
          offline: {
            effect: {
              method: 'HEAD',
              url,
            },
            commit: {
              type: `${typeUpperCase}_COMMIT`,
              meta: { id },
            },
            rollback: {
              type: `${typeUpperCase}_ROLLBACK`,
              meta: { lastVal: currentVal, id },
            },
          },
        },
      };
    };

    it('should return increment action creator', () => {
      expect(increment(1, 1)).toEqual(actionCreator(
        'https://dog.ceo/api/breeds/list/all',
        'increment',
        1,
        1
      ));
    });

    it('should return decrement action creator', () => {
      expect(decrement(1, 1)).toEqual(actionCreator(
        'https://dog.ceo/api/breeds/list/all',
        'decrement',
        1,
        1
      ));
    });

    it('should return reset action creator', () => {
      expect(reset(1, 1)).toEqual(actionCreator(
        'https://dog.ceo/api/breeds/list/all',
        'reset',
        1,
        1
      ));
    });
  });
});
