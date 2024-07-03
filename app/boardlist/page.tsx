'use client';

// BoardList.tsx
import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import * as S from './style';
import { IBoardListUIProps } from './types';

// // 예시로 date-fns 라이브러리 사용

// const getDate = (date: Date): string => {
//   return format(date, 'yyyy-MM-dd'); // 예시 포맷팅
// };

// 현재 파일 위치에 맞게 경로 설정

export default function Boardlist() {
  const [data, setData] = useState<any>(null); // 서버로부터 받은 데이터를 저장할 상태
  const router = useRouter();
  const go = (target: string) => {
    router.push(target);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9999/topics');
        if (!response.ok) {
          throw new Error('데이터를 불러오는 데 실패했습니다');
        }
        const result = await response.json();
        setData(result); // 서버에서 받은 데이터를 상태에 설정
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData(); // 컴포넌트가 마운트될 때 데이터를 가져오도록 설정
  }, []);
  if (!data) {
    return <div>로딩 중...</div>; // 데이터를 불러오는 동안 로딩 상태를 표시
  }
  const sortedData = [...data].sort((a, b) =>
    parseInt(a.pointValue) === parseInt(b.pointValue)
      ? parseInt(b.id) - parseInt(a.id)
      : parseInt(b.pointValue) - parseInt(a.pointValue)
  );
  return (
    <>
      <h2 style={{ fontSize: '50px' }}>게시판 목록</h2>
      <S.TableWrapper>
        <S.TableHead>
          <S.TableRow>
            <th>번호</th>
            <th>포인트</th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
          </S.TableRow>
        </S.TableHead>
        <S.TableBody>
          {sortedData.map((object: any, index: number) => (
            <S.TableRow key={object.id}>
              <S.TableColumn width='30px'>{index + 1}</S.TableColumn>
              <S.TableColumn width='50px'>
                {parseInt(object.pointValue) || '일반'}
              </S.TableColumn>
              <S.TableColumnTitle
                id={object.id}
                width='400px'
                // onClick={onClickMoveToPage(`/boards/${e._id}`)}
              >
                {object.titleValue}
              </S.TableColumnTitle>
              <S.TableColumn width='200px'>{object.writerValue}</S.TableColumn>
              {/* <S.TableColumn>{getDate(data.pwdValue)}</S.TableColumn> */}
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.TableWrapper>
      <S.Footer>
        <button onClick={() => go('/boardwrite')} className='btn-primary'>
          글쓰기
        </button>
      </S.Footer>
    </>
  );
}
