#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

'''Maps each node type to an implementation class.
When adding a new node type, you add to this mapping.
'''


from grit import exception

from grit.node import empty
from grit.node import message
from grit.node import misc
from grit.node import variant
from grit.node import structure
from grit.node import include
from grit.node import io


_ELEMENT_TO_CLASS = {
  'identifiers'   : empty.IdentifiersNode,
  'includes'      : empty.IncludesNode,
  'messages'      : empty.MessagesNode,
  'outputs'       : empty.OutputsNode,
  'structures'    : empty.StructuresNode,
  'translations'  : empty.TranslationsNode,
  'include'       : include.IncludeNode,
  'emit'          : io.EmitNode,
  'file'          : io.FileNode,
  'output'        : io.OutputNode,
  'ex'            : message.ExNode,
  'message'       : message.MessageNode,
  'ph'            : message.PhNode,
  'else'          : misc.ElseNode,
  'grit'          : misc.GritNode,
  'identifier'    : misc.IdentifierNode,
  'if'            : misc.IfNode,
  'part'          : misc.PartNode,
  'release'       : misc.ReleaseNode,
  'then'          : misc.ThenNode,
  'structure'     : structure.StructureNode,
  'skeleton'      : variant.SkeletonNode,
}


def ElementToClass(name, typeattr):
  '''Maps an element to a class that handles the element.

  Args:
    name: 'element' (the name of the element)
    typeattr: 'type' (the value of the type attribute, if present, else None)

  Return:
    type
  '''
  if name not in _ELEMENT_TO_CLASS:
    raise exception.UnknownElement()
  return _ELEMENT_TO_CLASS[name]

