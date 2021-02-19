export default interface ICreateTweetDTO {
  owner_id: string;
  description: string | undefined;
  images: string | undefined;
  video: string | undefined;
}
