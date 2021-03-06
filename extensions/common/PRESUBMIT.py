# Copyright 2015 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.

"""Chromium presubmit script for src/extensions/common.

See http://dev.chromium.org/developers/how-tos/depottools/presubmit-scripts
for more details on the presubmit API built into depot_tools.
"""

import sys

def CheckChangeOnUpload(input_api, output_api):
  return input_api.canned_checks.CheckPatchFormatted(input_api, output_api)
