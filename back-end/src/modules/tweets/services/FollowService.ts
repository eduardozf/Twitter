import { getRepository } from 'typeorm';
import { Users } from '@modules/users/infra/typeorm/models/Users';
import { Follows } from '../infra/typeorm/models/Follows';


interface IRequest {
  id: string;
}
interface IResponse {

}

class FollowService {
  public async followers({ id }: IRequest): Promise<Follows[]> {
    const repo = getRepository(Follows);
    const followers = await repo.find({ where: { follows_id: id } })


    return (followers);
  }
}

export default FollowService;