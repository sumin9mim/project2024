// Boardwrite.tsx
'use client';

import { useRouter } from 'next/navigation';
import Input from './input';
import * as S from './style';
import { IBoardWriteUIProps } from './types';

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

// Boardwrite.tsx

export default function Boardwrite(props: any) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const writer = (e.target as HTMLFormElement).elements.namedItem(
      'writer'
    ) as HTMLInputElement;
    const pwd = (e.target as HTMLFormElement).elements.namedItem(
      'pwd'
    ) as HTMLInputElement;
    const title = (e.target as HTMLFormElement).elements.namedItem(
      'title'
    ) as HTMLInputElement;
    const content = (e.target as HTMLFormElement).elements.namedItem(
      'content'
    ) as HTMLInputElement;
    const point = (e.target as HTMLFormElement).elements.namedItem(
      'point'
    ) as HTMLInputElement;

    const writerValue = writer?.value;
    const pwdValue = pwd?.value;
    const titleValue = title?.value;
    const contentValue = content?.value;
    const pointValue = point?.value || 0;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        writerValue,
        pwdValue,
        titleValue,
        contentValue,
        pointValue,
      }),
    };

    try {
      const response = await fetch('http://localhost:9999/topics', options);
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      const result = await response.json();
      console.log(result); // 서버에서 반환한 결과를 콘솔에 출력

      // 예시: 성공적으로 데이터를 서버에 전송한 후, 페이지 이동하기
      router.push('/boardlist'); // 게시판 목록 페이지로 이동
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit}>
          <S.Header>{props.isEdit ? '게시물 수정' : '게시물 등록'}</S.Header>

          <S.WriterWrapper>
            <S.InputWrapper>
              <S.Label>작성자</S.Label>
              <Input
                type='text'
                placeholder='작성자를 입력해주세요.'
                readOnly={props.isEdit}
                name='writer'
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Label>비밀번호</S.Label>
              <Input
                type='password'
                placeholder='비밀번호를 입력해주세요.'
                name='pwd'
              />
            </S.InputWrapper>
          </S.WriterWrapper>

          <S.InputWrapper>
            <S.Label>제목</S.Label>
            <Input
              type='text'
              placeholder='제목을 작성해주세요.'
              name='title'
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>내용</S.Label>
            <S.Textarea placeholder='내용을 작성해주세요.' name='content' />
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>포인트</S.Label>
            <Input
              type='text'
              placeholder='포인트를 입력해주세요.'
              name='point'
            />
          </S.InputWrapper>

          <S.SubmitWrapper>
            <S.ButtonWrapper>
              <input type='submit' value='등록하기' />
            </S.ButtonWrapper>
          </S.SubmitWrapper>
        </form>
      </S.Wrapper>
    </>
  );
}
