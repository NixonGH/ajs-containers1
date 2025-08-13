import Team from '../team';
import Character from '../character';

describe('Team', () => {
  test('add добавляет нового персонажа', () => {
    const team = new Team();
    const c = new Character('Bowman', 'bowman');
    team.add(c);
    expect(team.toArray()).toEqual([c]);
  });

  test('add выдает ошибку при дублировании', () => {
    const team = new Team();
    const c = new Character('Bowman', 'bowman');
    team.add(c);
    expect(() => team.add(c)).toThrow(new Error('Character already in team'));
  });

  test('addAll добавляет несколько персонажей и игнорирует дубликаты среди аргументов', () => {
    const team = new Team();
    const c1 = new Character('Bowman', 'bowman');
    const c2 = new Character('Swordsman', 'swordsman');
    const c3 = new Character('Mage', 'magician');

    team.addAll(c1, c2, c3, c2, c1);
    expect(team.toArray()).toEqual([c1, c2, c3]);
  });

  test('addAll не выдает ошибку, если добавляем персонажа, который уже есть в команде', () => {
    const team = new Team();
    const c1 = new Character('Bowman', 'bowman');
    const c2 = new Character('Swordsman', 'swordsman');

    team.add(c1);

    expect(() => team.addAll(c1, c2)).not.toThrow();
    expect(team.toArray()).toEqual([c1, c2]);
  });

  test('toArray для пустой команды возвращает пустой массив', () => {
    const team = new Team();
    expect(team.toArray()).toEqual([]);
  });
});
