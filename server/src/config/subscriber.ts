import { EventSubscriber, EntitySubscriberInterface, InsertEvent, UpdateEvent, RemoveEvent } from 'typeorm';
import { User } from './entitty';


@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log(`Before user insert: ${event.entity.name}`);
  }

  afterInsert(event: InsertEvent<User>) {
    console.log(`After user insert: ${event.entity.name}`);
  }

  beforeUpdate(event: UpdateEvent<User>) {
    console.log(`Before user update: ${event?.entity?.name}`);
  }

  afterUpdate(event: UpdateEvent<User>) {
    console.log(`After user update: ${event?.entity?.name}`);
  }

  beforeRemove(event: RemoveEvent<User>) {
    console.log(`Before user remove: ${event?.entity?.name}`);
  }

  afterRemove(event: RemoveEvent<User>) {
    console.log(`After user remove: ${event?.entity?.name}`);
  }
}
