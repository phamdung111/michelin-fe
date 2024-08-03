export interface CommentRestaurantResponseInterface {
    comments: CommentResponseInterface[];
    total: number;
}

export interface CommentResponseInterface {
    id: number;
    content: string;
    user: UserCommentInterface;
}

interface UserCommentInterface {
    id: number;
    name: string;
    avatar: string;
}
