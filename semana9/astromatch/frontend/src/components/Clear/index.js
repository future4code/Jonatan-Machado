import React from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { AiOutlineClear } from 'react-icons/ai';

function Clear() {
  async function HandleClear() {
    try {
      await api.put('jonatan/clear');
      toast.info('Lista limpa, Voa garot@! ✈️');
    } catch (err) {
      toast.danger('Lista limpa, Voa garot@! ✈️');
    }
  }
  return (
    <button type="button" onClick={() => HandleClear()}>
      <AiOutlineClear size={50} color={'#df4723'} />
    </button>
  );
}

export default Clear;
