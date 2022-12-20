export interface Vk {
    response: ResponseVk;
  }
  export interface ResponseVk {
    count: number;
    items?: (ItemsEntity)[] | null;
  }
  export interface ItemsEntity {
    id: number;
    from_id: number;
    owner_id: number;
    date: number;
    postponed_id?: number | null;
    marked_as_ads: number;
    can_delete: number;
    is_favorite: boolean;
    post_type: string;
    text: string;
    can_edit?: number | null;
    created_by?: number | null;
    can_pin: number;
    is_pinned?: number | null;
    attachments?: (AttachmentsEntity)[] | null;
    post_source: PostSource;
    comments: Comments;
    likes: Likes;
    reposts: Reposts;
    views: Views;
    donut: Donut;
    short_text_rate: number;
    hash: string;
    edited?: number | null;
  }
  export interface AttachmentsEntity {
    type: string;
    photo?: Photo | null;
    video?: Video | null;
  }
  export interface Photo {
    album_id: number;
    date: number;
    id: number;
    owner_id: number;
    access_key: string;
    post_id: number;
    sizes?: (SizesEntity)[] | null;
    text: string;
    user_id: number;
    has_tags: boolean;
  }
  export interface SizesEntity {
    height: number;
    type: string;
    width: number;
    url: string;
  }
  export interface Video {
    access_key: string;
    can_comment: number;
    can_edit: number;
    can_like: number;
    can_repost: number;
    can_subscribe: number;
    can_add_to_faves: number;
    can_add: number;
    can_attach_link: number;
    comments: number;
    date: number;
    description: string;
    duration: number;
    image?: (ImageEntity)[] | null;
    id: number;
    owner_id: number;
    title: string;
    is_favorite: boolean;
    track_code: string;
    type: string;
    views: number;
    local_views: number;
    platform: string;
  }
  export interface ImageEntity {
    url: string;
    width: number;
    height: number;
    with_padding: number;
  }
  export interface PostSource {
    type: string;
  }
  export interface Comments {
    can_post: number;
    can_close: number;
    count: number;
    groups_can_post: boolean;
  }
  export interface Likes {
    can_like: number;
    count: number;
    user_likes: number;
    can_publish: number;
  }
  export interface Reposts {
    count: number;
    wall_count: number;
    mail_count: number;
    user_reposted: number;
  }
  export interface Views {
    count: number;
  }
  export interface Donut {
    is_donut: boolean;
  }
  