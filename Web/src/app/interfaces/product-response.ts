export interface ProductResponse {
    success:        boolean;
    page:           number;
    total_pages:    number;
    document_count: number;
    data:           Data[];
}

export interface Data {
    id:             string;
    title:          string;
    description:    string;
    user_username:  string;
    user_name:      string;
    user_last_name: string;
    image:          string;
    category:       string;
    whatsapp_url:   string;
}
