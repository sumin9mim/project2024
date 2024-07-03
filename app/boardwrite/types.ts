export interface IBoardWriteUIProps {
  register: any;
  handleSubmit?: any;
  formState?: any;
  imageUrls: Array<string>;
  onChangeFiles: (fileUrl: string, index: number) => void;
  onClickCreateBoard: (data: any) => void;
  onClickUpdateBoard: (data: any) => void;
  onClickSearchAddress: () => void;
  onCompleteSearchAddress: (data: any) => void;
  data?: any;
  isEdit: boolean;
  isActive: boolean;
  isModalVisible: boolean;
}
