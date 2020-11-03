import { getRepository } from 'typeorm';
import { Users } from '../database/models/Users';
import { Follows } from '../database/models/Follows';


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