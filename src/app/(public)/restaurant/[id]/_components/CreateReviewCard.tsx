'use client';

import { useMutation } from '@tanstack/react-query';
import { createElement, Fragment, useState } from 'react';

import { FormButton } from '@/src/app/(auth)/_components/FormButton';
import { FormInput } from '@/src/app/(auth)/_components/FormInput';
import { FormNumberInput } from '@/src/app/(auth)/_components/FormNumberInput';
import { FormTextarea } from '@/src/app/(auth)/_components/FormTextarea';
import { CreateReviewDto } from '@/src/domain/review/dto/CreateReviewDto';
import { createReview } from '@/src/domain/review/service/mutation-fn/createReview';

function CreateReviewCard({
  isOpen,
  handleIsOpen,
  restaurantId,
}: {
  isOpen: boolean;
  handleIsOpen: () => void;
  restaurantId: string;
}) {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [total, setTotal] = useState<number>(1);
  const [visual, setVisual] = useState<number>(1);
  const [texture, setTexture] = useState<number>(1);
  const [taste, setTaste] = useState<number>(1);

  const createReviewMutation = useMutation({
    mutationFn: (reviewDto: CreateReviewDto) => createReview(reviewDto),
    onSuccess: () => {
      handleIsOpen();
      setTaste(1);
      setTitle('');
      setContent('');
      setVisual(1);
      setTexture(1);
      setTotal(1);
    },
  });

  if (!isOpen) {
    return createElement(Fragment);
  }

  return (
    <div className="flex w-full flex-col gap-3 border-2 border-stone-900 bg-stone-100 p-4">
      <p className="pb-2 text-xl font-bold">Create Review</p>
      <div className="flex w-full flex-col items-center gap-5 md:flex-row">
        <FormNumberInput
          value={total}
          name="tital"
          label="Total"
          onChange={(value) => setTotal(value)}
        />
        <FormNumberInput
          value={texture}
          name="texture"
          label="Texture"
          onChange={(value) => setTexture(value)}
        />
        <FormNumberInput
          value={taste}
          name="taste"
          label="Taste"
          onChange={(value) => setTaste(value)}
        />
        <FormNumberInput
          value={visual}
          name="pretty"
          label="Visual presentation"
          onChange={(value) => setVisual(value)}
        />
      </div>
      <FormInput
        value={title}
        name="title"
        label="Title"
        onChange={(value) => setTitle(value)}
      />
      <FormTextarea
        value={content}
        name="content"
        label="Description"
        onChange={(value) => setContent(value)}
      />
      <div className="flex w-full justify-end gap-4 pt-4">
        <div className="w-24">
          <FormButton
            text="Create"
            onClick={() =>
              createReviewMutation.mutate({
                restaurantId,
                title,
                content,
                tasteRating: taste,
                visualRating: visual,
                textureRating: texture,
                totalRating: total,
              })
            }
          />
        </div>
        <div className="w-24">
          <FormButton
            text="Cancel"
            onClick={() => {
              handleIsOpen();
              setTaste(1);
              setTitle('');
              setContent('');
              setVisual(1);
              setTexture(1);
              setTotal(1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export { CreateReviewCard };
