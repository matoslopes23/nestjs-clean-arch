import { UserProps, UserEntity } from '@/users/domain/entities/user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Shoud set props and id', () => {
    const props: StubProps = {
      prop1: 'prop1',
      prop2: 1,
    };
    const sut = new StubEntity(props);
    expect(sut.props).toStrictEqual(props);
    expect(sut._id).not.toBeNull();
  });

  it('Shoud accept a valid uuid', () => {
    const props: StubProps = {
      prop1: 'prop1',
      prop2: 1,
    };

    const id = '01901977-c95a-7d0d-bbf6-e0ec6eba5ad8';

    const sut = new StubEntity(props, id);

    expect(sut._id).not.toBeNull();
    expect(sut._id).toBe(id);
  });

  it('Shoud convert a entity to a Javascript object', () => {
    const props: StubProps = {
      prop1: 'prop1',
      prop2: 1,
    };

    const id = '01901977-c95a-7d0d-bbf6-e0ec6eba5ad8';

    const sut = new StubEntity(props, id);

    expect(sut.toJSON()).toStrictEqual({ id, ...props });
  });
});
